import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionsTypes";

const initialState = {
    cart: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.paylode]
            }

        case REMOVE_FROM_CART:
            return {}


        default:
            return state
    }
}



export default productReducer;