export const fetchBalance = async () => {
    const response = await fetch("http://demo9950074.mockable.io/wallet");
    return await response.json();
};
