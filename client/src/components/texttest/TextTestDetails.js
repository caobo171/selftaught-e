import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteTest} from '../../actions/texttestActions';

class TextTestDetails extends Component {

    onDeleteClick(id){
        this.props.deleteTest(id)
    }
    render(){
        const {test} = this.props;
        return(
            <div className="card">
                 <div className="card-content">
                  <div className="row">
                    <div className="col s8"><span className="card-title"> {test.title} </span></div>
                    <div className="col s4">
                       <Link className="btn teal" to={`/texttest/${test._id}`}>Do Exam</Link>
                       <button
                        className="btn red"
                        onClick={this.onDeleteClick.bind(this, test._id)}
                        >Delete</button>
                        <Link className="btn green" to ={`/texttest/edit/${test._id}`}>Edit</Link>
                    </div>
                  </div>
                 </div>
               </div>
        )
    }
}

export default connect(null, {deleteTest})(TextTestDetails) ;