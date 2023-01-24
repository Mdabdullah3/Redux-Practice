import { ADD_TO_CART, FETCHING_DATA, REMOVE_FROM_CART } from "../actionTypes/actionTypes"
export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export const fechingData = (data) => {
    return {
        type: FETCHING_DATA,
        payload: data
    }
}