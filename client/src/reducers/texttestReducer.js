import { SUBMIT_TEST,FETCH_TESTS } from '../actions/types';



export default function (state = null, action) {

    switch (action.type) {
        case SUBMIT_TEST:
             return action.payload || false; 
        case FETCH_TESTS:
             return action.payload || false;
        default:
            return state;
    }
}