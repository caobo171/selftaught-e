import { FETCH_AUTH } from './types';
import { FETCH_USER} from './types';
import axios from 'axios';
export const fetchAuth = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({
        type: FETCH_AUTH,
        payload: res.data
    })
};

export const fetchUser = (idUser)=> async dispatch =>{
    console.log(idUser);
    const res = await axios.get(`/api/get_user/${idUser}`);
    console.log(res.data);
    dispatch({
        type: FETCH_USER,
        payload:res.data
    })
}

export const updateExpUser = (idUser,exp)=> async dispatch =>{
    console.log(idUser);
    const res = await axios.post(`/api/exp_update/${idUser}`,{exp:exp})
    dispatch({
        type:FETCH_AUTH,
        payload:res.data
    });
    console.log('blagag');
}

export const updateImgUrl = (idUser,imgUrl)=> async dispatch =>{
    const res = await axios.post(`/api/imgUrl_update/${idUser}`,{imgUrl:imgUrl})
    dispatch({
        type:FETCH_AUTH,
        payload:res.data
    });
    console.log('blagag');
}