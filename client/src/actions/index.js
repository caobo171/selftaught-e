import { FETCH_USER, SUBMIT_TEST , FETCH_TESTS} from './types';
import axios from 'axios';
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({
        type: FETCH_USER,
        payload: res.data
    })
};

export const updateExpUser = (idUser,exp)=> async dispatch =>{
    const res = await axios.post(`/user/exp_update/${idUser}`,{exp})
    dispatch({
        type:FETCH_USER,
        payload:res.data
    })
}

export const submitTest = (values,history) =>async dispatch =>{
     const res = await axios.post('/api/texttest', values)
     
     history.push('/dashboard');
     dispatch(
         {
             type:SUBMIT_TEST,
             payload:res.data
         }
     )
};
export const fetchTests = () =>async dispatch =>{
     const res = await axios.get('/api/texttest')
     
     dispatch(
         {
             type:FETCH_TESTS,
             payload:res.data
         }
     )
};

