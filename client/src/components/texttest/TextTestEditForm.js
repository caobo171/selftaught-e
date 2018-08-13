import React, {Component} from 'react';
import {updateTest, fetchTest} from '../../actions/texttestActions';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import isEmpty from '../../validation/isEmpty';
import _ from 'lodash';


class TextTestEditForm extends Component {
   
   constructor(props){
       super(props)
       this.state={
           title:'',
           content:'',
           keys:'',
       }
       this.onChange = this.onChange.bind(this)
       this.onSubmit = this.onSubmit.bind(this);
   }

   componentDidMount(){
    if(this.props.match.params._id){
        this.props.fetchTest(this.props.match.params._id);       
    }
   }

   componentWillReceiveProps(nextProps){
       if(nextProps.texttest.test){
           const test = nextProps.texttest.test;

        //    test.title = isEmpty(test.title) ? test.title : '';
        //    test.content = isEmpty(test.content ) ? test.content  : '';
        //    test.keys = isEmpty(test.keys) ? test.keys : '';
           this.setState({
               title:test.title ,
               content:test.content,
               keys:_.join(test.keys,'/')
           })
       }

   }

   onSubmit(e){
    e.preventDefault();

    const texttest ={
        title:this.state.title,
        content:this.state.content,
        keys:this.state.keys
    }

    if(this.props.match.params._id){
        this.props.updateTest(this.props.match.params._id,texttest, this.props.history);
        
    }
   }
   
   onChange(e) {
       this.setState({
           [e.target.name]:e.target.value
       })
   }

   render(){
      
       return(
           <div className="container">
              <div className="card">
                <div className="card-content">
                  <div className="card-title">Edit Post</div>
                  <form onSubmit={this.onSubmit}>
                  <input type="text" value={this.state.title} onChange={this.onChange} name="title" />
                  <textarea className="materialize-textarea" type="text" value={this.state.content} onChange={this.onChange} name="content" />
                  <textarea className="materialize-textarea" type="text" value={this.state.keys} onChange={this.onChange} name="keys"/>
                  <input className="btn primary" value="Submit" type="submit"/>
                  <Link className="btn teal" to="/dashboard">Cancer</Link>
                  </form>
                </div>    
              </div>               
           </div>
       )
   }
}

function MapStateToProps ({texttest}){
    return {texttest}
}

export default connect(MapStateToProps, {updateTest, fetchTest})(withRouter(TextTestEditForm)) ;