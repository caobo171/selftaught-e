import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTests} from '../../actions';
import _ from 'lodash';


class TextTestList extends Component {
    componentDidMount(){
        this.props.fetchTests();
    }

    renderTests(){
       return _.map(this.props.texttest, test => {
           return(
               <div key={test._id} className="card">
                 <div className="card-content">
                   <span className="card-title"> {test.title} </span>
                 </div>
               </div>
           )
       })
    }
    render(){
        return(
          <div className="container">
            <div className="card">
               {this.renderTests()}
            </div>
          </div>  
        )
    }
}

function mapStateToProps({texttest}){
    return {texttest};
}

export default connect(mapStateToProps, {fetchTests})(TextTestList);