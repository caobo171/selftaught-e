import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class TextTestForm extends Component {
    render(){
        const { fields: {title, content, keys}, handleSubmit } = this.props;
        return(
          <form onSubmit={handleSubmit}>
              <h3>Create A New Test</h3>
              <div className="input-field">
                <label>Title</label>
                <input type="text"  {...title}/>
              </div>              
              <div className="input-field">
                <label>Content</label>
                <textarea className="materialize-textarea" {...content}/>
              </div>              
              <div className="input-field">
                <label>Keys</label>
                <textarea className="materialize-textarea" {...keys}/>
              </div>  
              <button className="btn red">Cancel</button> 
              <button type="submit" className="btn primary">Submit</button>                                    
          </form>
        )
    }
}

export default reduxForm({
    form: 'TextTest',
    fields: ['title','content','keys']
})(TextTestForm) ;