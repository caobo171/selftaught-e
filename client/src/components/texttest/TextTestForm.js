import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';

import TextTestField_input from './TextTestField_input';
import TextTestField_textarea from './TextTestField_textarea';


class TextTestForm extends Component {
   
    const

    render(){
        const {  handleSubmit } = this.props;
        return(
          <form onSubmit={handleSubmit(this.props.onTestSubmit)}>
              <h3>Create A New Test</h3>
              <Field label="Title" type="text" name="title" component={TextTestField_input} />        
              <Field label="ConTent" type="text" name="content" component={TextTestField_textarea} />        
              <Field label="Keys" type="text" name="keys" component={TextTestField_textarea} />        
              <button className="btn primary" type="submit">Submit</button>                               
              <Link to="/dashboard" className="btn red">Cancer</Link>                               
          </form>
        )
    }
}



export default reduxForm({
    form: 'TextTestForm',
    destroyOnUnmount: false
})(TextTestForm) ;