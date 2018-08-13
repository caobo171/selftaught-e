import { SUBMIT_TEST,FETCH_TESTS, FETCH_TEST, DELETE_TEST, UPDATE_TEST } from '../actions/types';

const initialState = {
    test:{},
    tests:{}
}



export default function (state = initialState, action) {

    switch (action.type) {
        case SUBMIT_TEST:
             return {
                 ...state,
                 test: action.payload
             } ; 
        case FETCH_TESTS:
             return {
                ...state,
                tests: action.payload
            } ;
        case FETCH_TEST:
             return {
                ...state,
                test: action.payload
            } ;
        case UPDATE_TEST:
             return {
                 ...state,
                 test: action.payload
             }
        case DELETE_TEST:
             return{
                 ...state,
                 tests: state.tests.filter(test => test._id !== action.payload)
             }
        default:
            return state;
    }
}