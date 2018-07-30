import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, Dropdown, NavItem } from 'react-materialize';
import uuid from 'uuid';
class Heading extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div>
                        <li><a onClick={(e) => {
                            e.preventDefault();
                            global.$('#foo').modal('open');
                        }}
                        >Log In</a></li>
                        <Modal
                            id='foo'
                            header='LOG IN'>
                            <a href="/auth/google" className="waves-effect waves-light btn-large social google red">
                                <i className="fa fa-google"></i> Sign in with google</a>
                            <br /><br />
                            <a href="/auth/facebook" className="waves-effect waves-light btn-large social facebook blue">
                                <i className="fa fa-facebook"></i> Sign in with facebook</a>

                        </Modal>
                    </div>
                );
            default:
                return [
                    <div>
                    <Dropdown key={uuid()}  trigger={
                        <div>
                           
                            <li key={uuid()} style={{ width: '50px' }}>      </li>
                            
                            <li key={uuid()}key="2"><a >{this.props.auth.name}</a></li>
                            <li key={uuid()}><img src={this.props.auth.imgUrl
                            } alt="" className="circle responsive-img"
                                style={{ textAlign: 'center', width: '40px', height: '40px', marginTop: '10px' }}
                            /><span></span></li>

                        </div>
                    }>
                        <NavItem key={uuid()} disabled>
                            <Link key={uuid()} to={`/profile/${this.props.auth._id}`}>
                                <img src={this.props.auth.imgUrl
                                } alt="" className="circle responsive-img"
                                    style={{ textAlign: 'center', width: '60px', height: '60px' }}
                                />
                            </Link>
                        </NavItem>
                        <NavItem key={uuid()}><span className="red-text text-accent-4 bold">{this.props.auth.name}</span></NavItem>
                        <NavItem key={uuid()}>
                            <span className="blue-text text-darken-2 bold">Exp: {this.props.auth.exp}
                            </span><span>           </span>
                            <span className="blue-text text-darken-2 bold">Coin: {this.props.auth.coin}
                            </span>
                        </NavItem>
                        <NavItem key={uuid()} divider />
                        <Link to="/api/logout"><span className="blue-text text-lighten-2 bold ">Logout</span></Link>
                        <Link to="/dashboard"><span className="blue-text text-lighten-2 bold ">DashBoard</span></Link>
                    </Dropdown>
                    </div>
                ];


        }
    }
    render() {
        //console.log(this.props.auth);
        return (
            <nav className="blue">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link className="left brand-logo" to={'/'}>SELF Taught </Link>
                        <ul className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </div>

            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        auth
    };
}
export default connect(mapStateToProps)(Heading);