import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import TextTestForm from './TextTestForm';
import TextTestFormReview from './TextTestFormReview';

class TextTest extends Component {
    state ={showFormReview: false};
    
    renderContent(){
        if(this.state.showFormReview){
            return(
                <TextTestFormReview
                  onCancel={()=>this.setState({showFormReview: false})}
                />
            )
        }
        return(
            <TextTestForm 
               onTestSubmit= {()=> this.setState({showFormReview: true})}
            />
        )
    }

    render(){
        return(
           <div className="container">
              <div className ="card ">
               <div className="card-content">
                 {this.renderContent()}
                </div>
              </div>    
            </div>
        )
    }

    
}

export default reduxForm({
    form:'TextTestForm'
})(TextTest);