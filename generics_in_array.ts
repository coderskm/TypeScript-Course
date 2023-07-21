function getSearchProducts<T>(products: T[]): T{
    const myIndex = 3;
    return products[myIndex];
}

const searchProducts = <T,>(products:T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}