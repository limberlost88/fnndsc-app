import React, { Component } from 'react';
import BCH from './images/bostonchildrens.png';
import docker from './images/docker.png';
import chris from './images/image.png';
import opencloud from './images/opencloud.png';
import redhat from './images/redhat.png';
import '../App.css';

class Logos extends Component {
  /*Simple logo class*/


  render() {
    return (
      <div>
        <div className="logo1">
          <img src={BCH} alt="Bostons Childrens Hospital" />
        </div>

        <div className="logo2">
          <img src={chris} width="200" height="200" alt="project" />
        </div>
        <div className="logo3"> 
          <img src={docker} width="250" height="200" alt="Docker" />
        </div>
        <div className="logo4">
          <img src={opencloud} alt="Opencloud" />
        </div>
        <div className="logo5">
          <img src={redhat} alt="Redhat" />
        </div>
      </div>
    );
  }
}

export default Logos;