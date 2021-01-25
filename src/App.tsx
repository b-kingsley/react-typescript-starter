import React from "react";
import {Wallet} from "./components/Wallet";
import configureStore from "./configureStore";
import {Provider} from "react-redux";
import {initialState} from "./initialState";

const store = configureStore(initialState);

const App: React.FC = () => (
    <Provider store={store}>
        <Wallet />
    </Provider>
);

export default App;
