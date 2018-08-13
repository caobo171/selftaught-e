import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchTest} from '../../../actions/texttestActions'

import FillTest from './FillTest';

class TextTestDisplay extends Component {

    componentDidMount(){
         if(this.props.match.params._id){
             console.log(this.props.match.params._id);
             this.props.fetchTest(this.props.match.params._id);
         }
    }

    render(){
        const {test} = this.props.texttest
        return(
            <div> 
               <div className="container">
                 <Link to="/dashboard" className="btn btn-light mb-3 yellow black-text">
                    Back To DashBoard
                 </Link>
                 
                  <FillTest test={test} />
               </div>
            </div>

        );
    }
}

function mapStateToProps({texttest}){
    return {texttest};
}


export default connect(mapStateToProps, {fetchTest})(TextTestDisplay);
