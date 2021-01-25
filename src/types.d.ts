type Status = "init" | "loading" | "error" | "success";

type WalletItem = {
    amount: number;
    name: string;
    symbol: string;
};

type Wallet = {
    items: WalletItem[];
    status: Status;
};

type State = {
    wallet: Wallet;
};
