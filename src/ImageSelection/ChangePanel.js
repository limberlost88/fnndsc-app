import React, { Component } from 'react';
import ProjectImage from './ProjectImage.js';
import Drawer from 'react-drag-drawer';
import '../App.css';


class ChangePanel extends Component {
  /*Main middle page
  Displays a slider of images
  When hovered over top right button
  displays info*/

  constructor(props){
    super(props);

    this.state = {
      toggle: false,
      hover: null
    }
  }

  hoverOnHandler(){
    this.setState({hover: true});
    //change colour

  }

  hoverOffHandler(){
    if (this.state.hover){
      this.setState({hover: false});
    }
  }

  toggle = () => {
    let { toggle } = this.state
    this.setState({ toggle: !toggle })
  }

  handleClick(e) {
      this.setState({hover: false});
  }

  render() {

    let mainpanel;
    let menu;

    if (this.state.hover)
      mainpanel = 
        <Drawer
            open={true}
            onRequestClose={this.toggle}
            direction='top'>
                  <div> <font size="30" color="#E1E166"> 
                  Year: { this.props.settings.year}
                  <div>Month: { this.props.settings.month}</div>
                  <div>Subject: { this.props.settings.subject} </div></font></div>
          </Drawer>

    else 
      mainpanel = <ProjectImage settings={this.props.settings}/>

    //menu options
    menu = <button className="button" onMouseEnter={this.hoverOnHandler.bind(this)}>+</button>

    return (
      //form goes here
      <div>
        <div className="Projector"  onMouseLeave={this.hoverOffHandler.bind(this)} onClick={e => this.handleClick(e)}>
          {menu}
          {mainpanel}      
        </div>
      </div>
    );
  }
}

export default ChangePanel;


    
      