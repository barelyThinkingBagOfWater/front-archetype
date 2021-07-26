import {
    ACTION
} from "../actions/action-types"

const initialState = {
    storedString: ''
};

function rootReducer(state = initialState, action) {

    if (action.type == ACTION) {
        return Object.assign({}, state, {
            storedString: action.payload
        });
    }

    return state;
}

export default rootReducer;