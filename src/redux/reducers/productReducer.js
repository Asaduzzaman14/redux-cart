import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionsTypes";

const initialState = {
    cart: []
}

const productReducer = (state = initialState, action) => {

    const selectedProduct = state.cart.find((product) => product._id === action.paylode._id)
    console.log(selectedProduct);

    switch (action.type) {

        case ADD_TO_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter(product => product._id !== selectedProduct._id)

                selectedProduct.quantity = selectedProduct.quantity + 1
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.paylode, quantity: 1 }]
            }


        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product._id !== action.paylode._id)
            }


        default:
            return state
    }
}



export default productReducer;