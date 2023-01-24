import { ADD_TO_CART, FETCHING_DATA, FETCHING_LOADING, REMOVE_FROM_CART } from "../actionTypes/actionTypes"

const initialState = {
    cart: [],
    product: [],
    loading: false
}

export const productReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(product => product.id === action.payload.id)
    console.log(selectedProduct);
    switch (action.type) {
        case ADD_TO_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter((product) => product.id !== selectedProduct.id)

                selectedProduct.quantity = selectedProduct.quantity + 1
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_FROM_CART:
            if (selectedProduct.quantity > 1) {
                const newCart = state.cart.filter((product) => product.id !== selectedProduct.id)

                selectedProduct.quantity = selectedProduct.quantity - 1
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            }
        case FETCHING_DATA:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case FETCHING_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}
