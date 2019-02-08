import React, { Component } from 'react';
import './App.css';
import ChangePanel from './ImageSelection/ChangePanel.js';
import Graphics from './Animations/Graphics.js';
import Landingpage from './landingpage/Landingpage.js';
import ReactFullpage from '@fullpage/react-fullpage'; 
import Logos from './Logos/Logos.js';

class App extends Component {

  constructor(){
    super();

    //first page icon
    var images = [];
    images.length = 6;
    images[0] = require("./imageofchris/evans.gif");
    images[1] = require('./imageofchris/columbus.gif');
    images[2] = require('./imageofchris/pratt.gif');
    images[3] = require('./imageofchris/tucker.gif');
    images[4] = require('./imageofchris/columbus.gif');
    images[5] = require('./imageofchris/cookiemonster.gif');


    //grab default year, month and first element in folder
    var file = require('./DataLayer/agesort/map.json');

    var file_info = file.data[0].split('/');


    var year = file_info[1].split('-');
    var month = file_info[2].split('-');
    var subject = file_info[3];


    this.state = {
        chris: images[Math.floor(Math.random()*6)],
        settings : {
          year : (parseInt(year[0]) + 2015).toString(),
          month : month[0],
          subject : subject
        },

        isHovered : null
    }

  }

  render() {

    return (
      <div className="App">

       <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>

              <div className="section" onClick={() => fullpageApi.moveSectionDown()}>
                <Landingpage picture={this.state.chris} />
              </div>

              <div className="section" >

                <ChangePanel isHovered = {this.state.isHovered} settings = {this.state.settings}/> 
                <Graphics />

              </div>

              <div className="section">
                <Logos />
              </div>

            </ReactFullpage.Wrapper>
          );
        } }
      />
      </div>
    );
  }
}

export default App;

