import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchTest} from '../../../actions/texttestActions'

import FillTest from './FillTest';
import OrginalText from './OriginalText'

class TextTestDisplay extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpenFillTest: false
        }
    }

    componentDidMount(){
         if(this.props.match.params._id){
             console.log(this.props.match.params._id);
             this.props.fetchTest(this.props.match.params._id);
         }
    }

    renderContent(){
        const {test} = this.props.texttest
        if(this.state.isOpenFillTest ==false){
            return(
                <div className = "card">
                    <div className ="card-content">
                    <OrginalText test ={test} />
                    </div>
                    <div className="card-action">
                       <button
                       className="btn teal"
                        onClick={()=>this.setState({isOpenFillTest:true})}
                       >Next</button>
                    </div>
                </div>
            )
        } else{
            return(
                <FillTest test={test} />
            )
        }
    }

    render(){
        
        return(
            <div> 
               <div className="container">
                 <Link to="/dashboard" className="btn btn-light mb-3 yellow black-text">
                    Back To DashBoard
                 </Link>
                  {this.renderContent()}              
               </div>
            </div>

        );
    }
}

function mapStateToProps({texttest}){
    return {texttest};
}


export default connect(mapStateToProps, {fetchTest})(TextTestDisplay);
