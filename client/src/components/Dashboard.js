import React,{Component} from 'react';
import {Link } from 'react-router-dom';

class Dashboard extends  Component {
    render(){
        return(
            <div>
                Dash board
                <div className="fixed-action-btn">
                  <Link to="/texttest" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                  </Link>
                </div>
            </div>
        )
    }
}

export default Dashboard;
