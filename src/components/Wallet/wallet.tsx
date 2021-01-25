import React, {useEffect} from "react";
import {loadBalances} from "./actions";
import {connect} from "react-redux";
import WalletItem from "./walletItem";
import "./styles.css";

type StateProps = {
    heading: string;
    status: Status;
};

const StateContainer: React.FC<StateProps> = ({status, heading, children}) => {
    return (
        <div className="container">
            <h1>{heading}</h1>
            {
                {
                    loading: <>Loading balances...</>,
                    error: <>An error has occurred</>,
                    success: <>{children}</>
                }[status]
            }
        </div>
    );
};

type Props = {
    walletState: Wallet;
    loadBalances: typeof loadBalances;
};

const Wallet: React.FC<Props> = ({walletState, loadBalances}) => {
    useEffect(() => {
        loadBalances();
    }, []);

    return (
        <StateContainer heading="Wallet" status={walletState.status}>
            {walletState.items.map(({name, symbol, amount}) => (
                <WalletItem key={name} name={name} symbol={symbol} amount={amount} />
            ))}
        </StateContainer>
    );
};

export default connect((state: State) => ({walletState: state.wallet}), {
    loadBalances
})(Wallet);
