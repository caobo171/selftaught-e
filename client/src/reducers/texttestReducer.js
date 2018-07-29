import { SUBMIT_TEST } from '../actions/types';


export default function (state = null, action) {

    switch (action.type) {
        case SUBMIT_TEST:
             return action.payload || false; 
        default:
            return state;
    }
}