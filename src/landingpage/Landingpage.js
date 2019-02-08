import React, { Component } from 'react';
import '../App.css';

class Landingpage extends Component {
//First page - two words and an icon

  render() {
    return (
      <div>
        <h1 className="logo">
          <span className="word1">Project</span>
          <span className="word2">Chris</span>
          <img src={this.props.picture} className="icon" alt = 'Chris' />
        </h1>
      </div>
    );
  }
}

export default Landingpage;