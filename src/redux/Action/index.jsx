//  For Adding items to cart


export const addToCart = (product) => {
    return {
        type: "Add_TO_CART",
        payload: product
    }

}

// For removing items fron cart
export const delCart = (product) => {
    return {
        type: "DELETE_CART",
        payload: product
    }

}