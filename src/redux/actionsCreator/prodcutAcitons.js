import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionsTypes"

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        paylode: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        paylode: product
    }
}