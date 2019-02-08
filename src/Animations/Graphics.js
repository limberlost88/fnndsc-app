import React, { Component } from 'react';
import '../App.css';
import Sprites from'./Sprites.js';


class Graphics extends Component {
  /*Initializes sprites
    Additional animations can be added here*/

  constructor(){
    super();
    this.state = {
      elapsed:0,
      spriteCount: 0,
      createNewSprite: false,

    }
  }

  render() {

    return (
      <div>
      newSprite = <Sprites x = {0} y ={0}/>
      </div>
      
    );
  }
}

export default Graphics;