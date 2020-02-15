import React, { Component } from 'react';

class Skill extends Component {
  render () {
    return <img src={this.props.src} alt={this.props.alt} height="100px"/>;
  }
}

export default Skill;