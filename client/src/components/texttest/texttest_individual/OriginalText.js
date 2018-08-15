 import React, { Component } from 'react';
 import _ from 'lodash'

 class OriginalText extends Component {

  render() {
    const {title, origintext, explainingtext} = this.props.test;

    
    return (
      <div>
        <div className="card-title">{title}</div>
        <div className="row">
          <div className="col s6 blue-text">
             {origintext}
          </div>
          <div className="col s6 teal-text">
             {explainingtext}
          </div>
        </div>
      </div>
    )
  }
}

export default OriginalText