import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {submitTest} from '../../actions/texttestActions'

import _ from 'lodash';
import AutosizeInput from 'react-input-autosize';
import uuid from 'uuid';

class TextTestFormReview extends Component{

    displayContent(){
    const Data = _(this.props.formValues.content).split('/').value();
     return _.map(Data, (data)=>{
         if(_.startsWith(data, '*')){
            data= _.replace(data,'*','');
            return(
                <AutosizeInput   
                    className='input'
                    key={uuid()}          
                    name="form-field-name"
                    placeholder = {data}
                 />
            )
            }else{
                return(
                    <span key={uuid()}>{data}</span>
                )
            }
            })
    }   
    displayKeys(){
    const Data = _(this.props.formValues.keys).split('/').value();
     return _.map(Data, (data)=>{
          data = _.trim(data)
           return(
               <h6 key={uuid()}>{data}</h6>
           )
        })
    }   
   


    render(){
        const {formValues, onCancel, submitTest, history} = this.props
        return(
            <div>
                <h5>Please Confirm the Test you send</h5>
                <div>
                    <label className="confirm-field">Test Tile</label>
                    <div className="confirm-field">{formValues.title}</div>
                    <label className="confirm-field">Test Content</label>
                    <div className="confirm-field">{this.displayContent()}</div>
                    <label className="confirm-field">Test Keys</label>
                    <div className="confirm-field">{this.displayKeys()}</div>
                </div>
                <button
                  className="btn teal"
                  onClick={ onCancel }
                >Back</button>
                <button
                  className="btn blue"
                  onClick={()=> submitTest(formValues,history)}
                >Save</button>
            </div>
        )
    }
}

function mapStateToProps(state){
      return{
          formValues: state.form.TextTestForm.values
      }
}

export default connect(mapStateToProps,{submitTest})(withRouter(TextTestFormReview)) ;