import {SUBMIT_TEST , FETCH_TESTS, FETCH_TEST, DELETE_TEST, UPDATE_TEST} from './types';
import axios from 'axios';

export const fetchTests = () =>async dispatch =>{
     const res = await axios.get('/api/texttest')
     
     dispatch(
         {
             type:FETCH_TESTS,
             payload:res.data
         }
     )
};

export const fetchTest = (_id) => async dispatch =>{
    const res = await axios.get(`/api/texttest/${_id}`)
    dispatch ({
        type: FETCH_TEST,
        payload: res.data
    })
}

export const deleteTest = (_id) => async dispatch =>{
    console.log('hello anh em')
    const res = await axios.delete(`/api/texttest/${_id}`)
    dispatch ({
        type: DELETE_TEST,
        payload: _id
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

export const updateTest = (_id, values, history) => async dispatch =>{
    console.log('res.data');
    console.log(_id)
    history.push('/dashboard');
    
    const res = await axios.post(`/api/texttest/${_id}`, values)
   
    

    dispatch({
        type: UPDATE_TEST,
        payload: res.data
    })

}
// app.get('api/texttest/:id', requireLogin, async (req,res)=>{
//     const texttest = await Test.findById(req.params.id);
//     res.send(texttest);
// })
