import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser ,updateImgUrl} from '../actions/userActions';
import { Col, Card, Collapsible, CollapsibleItem } from 'react-materialize';


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            textImgUrl: ''
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.idUser);
        this.props.fetchUser(this.props.match.params.idUser);
    }

    renderContentLeft() {
        switch (this.props.user) {
            case null:
                return;
            case false:
                return;
            default:
                return (
                    <Card className='blue-grey darken-1' textClassName='white-text'>
                        <img src={this.props.user.imgUrl}
                            alt="" className="circle"
                            style={{ textAlign: 'center', width: '100px', height: '100px', marginLeft: '33%' }}
                        />
                        <br />
                        <h5 style={{ textAlign: 'center' }} className="orange-text text-darken-2">{this.props.user.name}</h5>
                        <hr />
                        <div className="row">
                            <Col m={5}>
                                <div style={{ textAlign: 'center' }} >
                                    <h6 >EXP </h6><br /><h6>{this.props.user.exp}</h6>
                                </div>
                            </Col>
                            <Col m={2}></Col>
                            <Col m={5}>
                                <div style={{ textAlign: 'center' }} >
                                    <h6 >COIN</h6><br /><h6>{this.props.user.coin}</h6>
                                </div>
                            </Col>
                        </div>
                    </Card>
                )
        }

    }

    updateInputValue(evt) {
        console.log('agagg');
        this.setState({
            textImgUrl: evt.target.value
        });
    }

    onClickHandle(e){
        
        this.props.updateImgUrl(this.props.user._id,this.state.textImgUrl);
        e.preventDefault();
    }

    renderContentRight() {
        if (this.props.user && this.props.auth) {
            if (this.props.user._id === this.props.auth._id) {
                return (
                    <Collapsible>
                        <CollapsibleItem header='Thay đổi ảnh đại diện' icon='filter_drama'>
                           <form>
                            <div className="input-field">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" className="validate"
                                value={this.state.textImgUrl}
                                onChange={evt => this.updateInputValue(evt)} />
                                <label >First Name</label>
                            </div>
                            <button type="submit" className="btn" onClick={()=>{this.onClickHandle()}}
                            >save</button>
                            </form>
                        </CollapsibleItem>

                    </Collapsible>
                )
            }
        }
    }



    render() {
        console.log(this.props.user);
        return (
            <div className='row'>
                <Col m={4} s={12}>
                    {this.renderContentLeft()}
                </Col>
                <Col m={6} s={12}>
                    {this.renderContentRight()}
                </Col>
            </div>
        );

    }
}


function mapStateToProps({ user, auth }) {
    return {
        user,
        auth
    };
}

export default connect(mapStateToProps, {
    fetchUser,
    updateImgUrl
})(Profile);