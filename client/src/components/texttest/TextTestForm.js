import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import TextTestField from './TextTestField';


class TextTestForm extends Component {
   
    const

    render(){
        const {  handleSubmit } = this.props;
        return(
          <form onSubmit={handleSubmit(values =>console.log(values))}>
              <h3>Create A New Test</h3>
              <Field type="text" name="surveyTitle" component={TextTestField} />        
              <button className="btn primary" type="submit">Submit</button>                               
              <button className="btn red">Cancer</button>                               
          </form>
        )
    }
}

export default reduxForm({
    form: 'TextTest',
    fields: ['title','content','keys']
})(TextTestForm) ;