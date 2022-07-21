import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

const initialState = {
    counter : 0,

};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {counter : state.counter + 1};
        case DECREMENT:
            return {counter : state.counter - 1};
        case RESET:
            return {counter : 0};
        default:
            return state;  //!  reducer() her zaman bir state döndürmesi gerekiyor. O yüzden en sona break değil de return dedik.
    }
};

export default counterReducer;