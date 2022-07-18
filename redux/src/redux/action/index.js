import { INCREMENT, DECREMENT, RESET } from "../action-types";

export const incrementCount = () => {
    return {
        type: INCREMENT
    };
};

export const decrementCount = () => {
    return {
        type: DECREMENT
    };
};

export const reset = () => {
    return {
        type: RESET
    };
};
