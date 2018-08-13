import { FETCH_USER} from './types';
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



