import React from "react";
import {fireEvent, render, within} from "@testing-library/react";
import App from "./App";
import * as services from "./components/Wallet/services";

const data = {
    wallet: [
        {
            name: "GBP",
            symbol: "£",
            amount: 1600
        },
        {
            name: "EUR",
            symbol: "€",
            amount: 400
        },
        {
            name: "USD",
            symbol: "$",
            amount: 800
        }
    ]
};

let mockFetchBalances = jest.spyOn(services, "fetchBalance").mockResolvedValue(data);

describe("Wallet", () => {
    it("should show a loading message when fetching the balance", () => {
        const {getByText} = render(<App />);
        expect(mockFetchBalances).toHaveBeenCalledTimes(1);
        getByText("Loading balances...");
    });
    it("should handle an error", async () => {
        mockFetchBalances.mockRejectedValueOnce("Failed to fetch");
        const {findByText} = render(<App />);
        await findByText("An error has occurred");
    });
    it("should show initial balances on the screen", async () => {
        const {findByText} = render(<App />);
        await findByText("GBP");
        await findByText("£ 1600");
        await findByText("EUR");
        await findByText("€ 400");
        await findByText("USD");
        await findByText("$ 800");
    });
    it("should increase GBP amount", async () => {
        const {findByTestId} = render(<App />);
        const gbpWallet = await findByTestId("walletItem-GBP");
        const increaseButton = await within(gbpWallet).findByTitle("Increase");
        fireEvent.click(increaseButton);
        await within(gbpWallet).findByText("GBP");
        await within(gbpWallet).findByText("£ 1601");
    });
    it("should decrease GBP amount", async () => {
        const {findByTestId} = render(<App />);
        const gbpWallet = await findByTestId("walletItem-GBP");
        const decreaseButton = await within(gbpWallet).findByTitle("Decrease");
        fireEvent.click(decreaseButton);
        await within(gbpWallet).findByText("GBP");
        await within(gbpWallet).findByText("£ 1599");
    });
    it("should increase EUR amount", async () => {
        const {findByTestId} = render(<App />);
        const gbpWallet = await findByTestId("walletItem-EUR");
        const increaseButton = await within(gbpWallet).findByTitle("Increase");
        fireEvent.click(increaseButton);
        await within(gbpWallet).findByText("EUR");
        await within(gbpWallet).findByText("€ 401");
    });
    it("should decrease EUR amount", async () => {
        const {findByTestId} = render(<App />);
        const gbpWallet = await findByTestId("walletItem-EUR");
        const decreaseButton = await within(gbpWallet).findByTitle("Decrease");
        fireEvent.click(decreaseButton);
        await within(gbpWallet).findByText("EUR");
        await within(gbpWallet).findByText("€ 399");
    });
    it("should increase USD amount", async () => {
        const {findByTestId} = render(<App />);
        const gbpWallet = await findByTestId("walletItem-USD");
        const increaseButton = await within(gbpWallet).findByTitle("Increase");
        fireEvent.click(increaseButton);
        await within(gbpWallet).findByText("USD");
        await within(gbpWallet).findByText("$ 801");
    });
    it("should decrease USD amount", async () => {
        const {findByTestId} = render(<App />);
        const gbpWallet = await findByTestId("walletItem-USD");
        const decreaseButton = await within(gbpWallet).findByTitle("Decrease");
        fireEvent.click(decreaseButton);
        await within(gbpWallet).findByText("USD");
        await within(gbpWallet).findByText("$ 799");
    });
});
