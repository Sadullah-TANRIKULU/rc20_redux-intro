import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes"

export const increment = () => {
    return { type: INCREMENT }
}

export const reset = () => {
    return { type: RESET }
}

export const decrement = () => {
    return { type: DECREMENT }
}