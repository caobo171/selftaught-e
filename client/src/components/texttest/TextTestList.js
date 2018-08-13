import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTests} from '../../actions/texttestActions';
import _ from 'lodash';

import TextTestDetails from './TextTestDetails';


class TextTestList extends Component {
    componentDidMount(){
        this.props.fetchTests();
    }

    renderTests(){
       return _.map(this.props.texttest.tests, test => {
           return(
               <TextTestDetails key={test._id} test={test} />
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