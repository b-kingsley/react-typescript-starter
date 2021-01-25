import React from "react";
import {connect} from "react-redux";
import {increaseBalance, decreaseBalance} from "./actions";

type WalletItemProps = {
    name: string;
    symbol: string;
    amount: number;
    increaseBalance: typeof increaseBalance;
    decreaseBalance: typeof decreaseBalance;
};

const WalletItem: React.FC<WalletItemProps> = ({
    name,
    symbol,
    amount,
    increaseBalance,
    decreaseBalance
}) => {
    return (
        <div data-testid={`walletItem-${name}`}>
            <h2>{name}</h2>
            {amount < 0 && <h3>Warning, balance is in negative</h3>}
            <div className="wallet-item-controls">
                <button title="Decrease" onClick={() => decreaseBalance(name)}>
                    -
                </button>
                <span>
                    {symbol} {amount}
                </span>
                <button title="Increase" onClick={() => increaseBalance(name)}>
                    +
                </button>
            </div>
        </div>
    );
};

export default connect(null, {increaseBalance, decreaseBalance})(WalletItem);
