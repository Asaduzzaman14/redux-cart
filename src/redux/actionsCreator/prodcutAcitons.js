import { ADD_TO_CART } from "../actionTypes/actionsTypes"

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        paylode: product
    }
}