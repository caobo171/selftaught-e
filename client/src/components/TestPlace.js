import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateExpUser} from '../actions/userActions';
class TestPlace extends Component {
    render() {
        console.log(this.props.auth);
        return (
             <div>
                 <button onClick={()=>{
                    this.props.updateExpUser(this.props.auth._id,15);
                 }}>Exp ++</button>
             </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        auth
    };
}
export default connect(mapStateToProps,{
    updateExpUser
})(TestPlace);