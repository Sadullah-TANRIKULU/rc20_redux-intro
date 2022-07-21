// import { DECREMENT, INCREMENT, RESET } from "./types/counterTypes";

// const initialState = {
//     counter : 0,

// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {counter : state.counter + 1};
//         case DECREMENT:
//             return {counter : state.counter - 1};
//         case RESET:
//             return {counter : 0};
//         default:
//             return state;  //!  reducer() her zaman bir state döndürmesi gerekiyor. O yüzden en sona break değil de return dedik.
//     }
// };

// export default reducer;

// redux klasörü global state in toplandığı klasördür

import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducers";

const rootReducer = combineReducers({
    counterReducer : counterReducer,
    todoReducer : todoReducer
});

export const getStore = () => {
    const store = createStore(rootReducer);
    return store;
};