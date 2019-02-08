import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Sprite, Group} from 'react-konva';
import sprites from '../sprites.png';

class Sprites extends Component {
  /*
    Plays back three sprites
      can change speed, animations, size, location, number etc*/

  constructor(props){
    super(props);

      var dist = Math.floor(Math.random()*600) + 1000;
      var dist2 = Math.floor(Math.random()*600) + 1500;
      var dist3 = Math.floor(Math.random()*600) + 1200;

      var speed1 = Math.floor(Math.random()*8) + 6;
      var speed2 = Math.floor(Math.random()*8) + 6;
      var speed3 = Math.floor(Math.random()*8) + 6;

      this.state = {

      locationx1: this.props.x,
      locationx2: this.props.x,
      locationx3: this.props.x,
      locationy: [this.props.y+15, this.props.y, this.props.y+30],
      framerate1: speed1,
      framerate2: speed2,
      framerate3: speed3,

      animations: {
        standing: [0, 0, 80, 94],
        //add popping

        walking: [53, 41, 55, 136,
                 261, 41, 43, 136,
                 470, 41,  36, 136,
                 673, 41, 28, 136,

                 69, 254, 27, 136,
                 271, 254, 28, 136,
                 // 341, 254, 37, 136,
                 673, 254, 48, 136],

        jumping: [0, 282, 80, 94,
                 80, 282, 80, 94,
                 160, 282, 80, 94]},
      animation: 'walking',

      max_distance: [dist, dist2, dist3],
    }

  }

  restartSprite1(){
    this.setState({locationx1: this.props.x});
    this.setState({framerate1: Math.floor(Math.random()*8) + 6});
  }

  restartSprite2(){
    this.setState({locationx2: this.props.x});
    this.setState({framerate2: Math.floor(Math.random()*8) + 6});
  }

  restartSprite3(){
    this.setState({locationx3: this.props.x});
    this.setState({framerate3: Math.floor(Math.random()*8) + 6});
  }

  componentWillMount(){
    this.spriteImage1 = new Image();
    this.spriteImage1.src = sprites;

    this.spriteImage2 = new Image();
    this.spriteImage2.src = sprites;

    this.spriteImage3 = new Image();
    this.spriteImage3.src = sprites;

  }

  componentDidMount(){
    const sprite1 = this.spriteNode1;
    var x1 = this.state.locationx1;
    const distanceAllowed1 = this.state.max_distance[0];
    const framerate1 = this.state.framerate3 * 1.5;


    var movement1 = new Konva.Animation(frame => {
      sprite1.setX((frame.time /framerate1) + x1);
      if ((frame.time /framerate1) + x1 > distanceAllowed1){
        this.restartSprite1();
        frame.time=0;

      }
    }, this.spriteNode1.getLayer());


    if (sprite1 && !sprite1.isRunning()){
      sprite1.start();
    }

    if (movement1 && !movement1.isRunning())
      movement1.start();

    const sprite2 = this.spriteNode2;
    var x2 = this.state.locationx2;
    const distanceAllowed2 = this.state.max_distance[1];
    const framerate2 = this.state.framerate2 * 1.5;

    var movement2 = new Konva.Animation(frame => {
      sprite2.setX((frame.time / framerate2) + x2);
      if ((frame.time /framerate2) + x2 > distanceAllowed2){
        this.restartSprite2();
        frame.time=0;
      }
    }, this.spriteNode2.getLayer());


    if (sprite2 && !sprite2.isRunning()){
      sprite2.start();
    }

    if (movement2 && !movement2.isRunning())
      movement2.start();

    const sprite3 = this.spriteNode3;
    var x3 = this.state.locationx3;
    const distanceAllowed3 = this.state.max_distance[2];
    const framerate3 = this.state.framerate3 * 2;


    var movement3 = new Konva.Animation(frame => {
      sprite3.setX((frame.time /framerate3) + x3);
      if ((frame.time /framerate3) + x3 > distanceAllowed3){
        this.restartSprite3();
        frame.time=0;

      }
    }, this.spriteNode3.getLayer());


    if (sprite3 && !sprite3.isRunning()){
      sprite3.start();
    }

    if (movement3 && !movement3.isRunning())
      movement3.start();

}

  render() {


    return (
      <div>
      <Stage width={2000} height={165}>
        <Layer>
        <Group>

          <Sprite image={this.spriteImage1}
            x = {this.state.locationx1}
            y = {this.state.locationy[0]}
            animations = {this.state.animations}
            animation = {this.state.animation}
            frameRate = {this.state.framerate1}
            frameIndex = {0}
            ref={node => {this.spriteNode1 = node;}}>
          </Sprite>   

          <Sprite image={this.spriteImage2}
            x = {this.state.locationx2}
            y = {this.state.locationy[1]}
            animations = {this.state.animations}
            animation = {this.state.animation}
            frameRate = {this.state.framerate2}
            frameIndex = {0}
            ref={node => {this.spriteNode2 = node;}}>
          </Sprite> 

          <Sprite image={this.spriteImage3}
            x = {this.state.locationx3}
            y = {this.state.locationy[2]}
            animations = {this.state.animations}
            animation = {this.state.animation}
            frameRate = {this.state.framerate3}
            frameIndex = {0}
            ref={node => {this.spriteNode3 = node;}}>
          </Sprite> 

          </Group>    
        </Layer>
      </Stage>   
      </div>
      
    );
    }
  }

export default Sprites;

