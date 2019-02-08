import React, { Component } from 'react';
import '../App.css';
import Drawer from 'react-drag-drawer';

class SelectImages extends Component {
      /*Much of the comments in this class 
      are for giving the added feature of 
      changing subjects however I've 
      decided to keep it to one subject*/

      /*This class does not actually allow
      the selection of other images but 
      just displays info about the current subject*/

  constructor(props){
    super(props);
    // this.state = { year: null };
    // this.onChange = this.onChange.bind(this);

    this.state = {

      monthSelected: true,
      toggle: true,
      hover:true,

      settings: {
      year: this.props.settings.year,
      month: this.props.settings.month,
      subject: this.props.settings.subject},

      choosing: {
      year: this.props.settings.year,
      month: this.props.settings.month,
      subject: this.props.settings.subject},

      timeline:   
         {
          "year": {
              "2015": {
                  "00":{0:"subj-4-5386-ex", 1:"subj-5-14141-ex"},
                  "07": {0:"subj-8-14095-ex"},
              },
              "2016": {
                  "05": {0:"subj-7-14317-ex"}
              },
              "2017": {
                  "01":{0:"subj-1-14354-ex"},
                  "11": {0:"subj-6-14392-ex"}
              },
              "2018": {
                  "01":{0:"subj-2-5918-ex"},
                  "04": {0:"subj-3-14482-ex"}
              }
          }
      }
    }

    // timeline.year[/*year*/][/*month*/].subject

         

    // var setting = new Array();
    // setting[0] = new Array();
    // setting[0][0] = new Array();
    // setting[0][0][0] = 1;

    // var file = require('../DataLayer/agesort/map.json');
    // var file_info = file.data;


    // for (var i =0; i<file_info.length;i++){

    //   var dir = file_info[i].split('/');

    //   var year_info = dir[1].split('-');
    //   var year = parseInt(year_info[0]) + 2015;

    //   var month_info = dir[2].split('-');
    //   var month = parseInt(month_info[0]);

    //   var subject = dir[3];


      // var foundYear = setting.findIndex(function(year) { return year == year; }); 

      // if (foundYear) {var foundMonth = setting[foundYear].findIndex(function(month) { return month == month; }); 

      //   if (foundMonth){
      //     setting[foundYear][foundMonth][setting[foundYear][foundMonth].length-1] = subject;
      //   }
      //   else {
      //     setting[foundYear][setting[foundYear].length-1] = month;
      //     setting[foundYear][setting[foundYear].length-2][setting[foundYear][setting[foundYear].length-2].length-1] = subject;
      //   }
      // }
      // else{
                    
      //   setting[setting.length-1][0][0] = year;
      //   console.log(setting.length);
      //           console.log(setting[0].length);
      //               console.log(setting[0][0].length);
      //   setting[setting.length-2][setting[setting.length-2].length-1] = month;
      //   setting[foundYear][foundMonth][setting[foundYear][foundMonth].length-1] = subject;
      // }

  }
 
handleSubmit(){
  //future submit button
  this.props.hoverOffHandler();
}

toggle = () => {
  let { toggle } = this.state
  this.setState({ toggle: !toggle })
}

handleClick(e) {
    this.setState({toggle: false});
}

 render () {

  return (
    <div onClick={e => this.handleClick(e)}>
      <Drawer
        open={this.state.toggle}
        onRequestClose={this.toggle}
        direction='top'>
          <div> <font size="30" color="yellow"> 
          Year: { this.props.settings.year}
          <div>Month: { this.props.settings.month}</div>
          <div>Subject: { this.props.settings.subject} </div></font></div>
      </Drawer>
    </div>
  )
}


}

export default SelectImages;


  //   let dropdown_1;
  //   let dropdown_2;
  //   let dropdown_3;

    

  //  var year = Object.keys(t);
  //  dropdown_1 = <Dropdown options={year} 
  //               onChange={this._onSelectYear} 
  //               value={this.state.choosing.year} 
  //               placeholder="Select an option" />



  //  if (this.state.choosing.year != null){
  //   var month = Object.keys(this.state.timeline.year[this.state.choosing.year]);
  //   dropdown_2 =    <Dropdown options={month} 
  //                   onChange={this._onSelectMonth} 
  //                   value={this.state.choosing.month} 
  //                   placeholder="Select an option" />
  //   }

  //  if (this.state.choosing.year && this.state.choosing.month) {
  //   var subject = Object.keys(this.state.timeline.year[this.state.choosing.year][this.state.choosing.month]);
  //   dropdown_3 = <Dropdown options={subject} 
  //                 onChange={this._onSelectSubject} 
  //                 value={this.state.choosing.subject} 
  //                 placeholder="Select an option" />
  // }

                                  
          // timeline.year[/*year*/][/*month*/].subject