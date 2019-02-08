import React, { Component } from 'react';
import '../App.css'
import Slider from "react-slick";



class ProjectImage extends Component {
  /*Slider of images
  Much of this has been hardcoded in as opposed to pulling from the 
  data layer. For the scope of this project I think i can
  take some shortcuts*/

  constructor(props){
    super(props);

    var images = [
        require("../DataLayer/agesort/02-yr/01-mo/subj-1-14354-ex/COR_RECON-SAG_MPRAGE_220_FOV-233260/dcm2jpgRaw/middle-COR_RECON-SAG_MPRAGE_220_FOV-233260.jpg"),
        require("../DataLayer/agesort/02-yr/01-mo/subj-1-14354-ex/AX_T2_FLAIR-AX_T2_FLAIR-233417/dcm2jpgRaw/middle-AX_T2_FLAIR-AX_T2_FLAIR-233417.jpg"),
        require("../DataLayer/agesort/02-yr/01-mo/subj-1-14354-ex/SAG_MPRAGE_220_FOV-SAG_MPRAGE_220_FOV-233490/dcm2jpgRaw/middle-SAG_MPRAGE_220_FOV-SAG_MPRAGE_220_FOV-233490.jpg"),
        require("../DataLayer/agesort/02-yr/01-mo/subj-1-14354-ex/COR_FSE_T2-COR_FSE_T2-233385/dcm2jpgRaw/middle-COR_FSE_T2-COR_FSE_T2-233385.jpg"),
        require("../DataLayer/agesort/02-yr/01-mo/subj-1-14354-ex/AX_TSE_T2__TRIO_PARAMETERS_-AX_TSE_T2__TRIO_PARAMETERS_-233573/dcm2jpgRaw/middle-AX_TSE_T2__TRIO_PARAMETERS_-AX_TSE_T2__TRIO_PARAMETERS_-233573.jpg"),
        require("../DataLayer/agesort/02-yr/01-mo/subj-1-14354-ex/AX_RECON-SAG_MPRAGE_220_FOV-233240/dcm2jpgRaw/middle-AX_RECON-SAG_MPRAGE_220_FOV-233240.jpg")
    ];
    this.state = {images: images};

    // var file = require('../DataLayer/agesort/02-yr/01-mo/ex.json');
    // var list = file[this.props.settings.subject].imageLocation;

    // var file_info = file.data[0].split('/');
    // const images = [];
    // images.length = ;

  }


  render() {

    // const imageList = this.state.images;
    // const listItems = imageList.map((image) =>   <img src={image} width="400" height="400" alt = 'picture'/> );
    var settings = {
      infinite: true,
      slidesToScroll: 3,
      centerMode: true,
      slidesToShow: 3,
      speed: 300,
      variableWidth: false
    };

    return (
      <div> 
        <div className="PhotoSlider">
          <Slider {...settings}>
          <div>
            <img src={this.state.images[0]} width="400" height="400" alt = 'picture1'/>
          </div>
          <div>
            <img src={this.state.images[1]} width="400" height="400" alt = 'picture2'/>
          </div>
          <div>
            <img src={this.state.images[2]} width="400" height="400" alt = 'picture3'/>
          </div>
          <div>
            <img src={this.state.images[3]} width="400" height="400" alt = 'picture4'/>
          </div>
          <div>
            <img src={this.state.images[4]} width="400" height="400" alt = 'picture5'/>
          </div>
          <div>
            <img src={this.state.images[5]} width="400" height="400" alt = 'picture6'/>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

export default ProjectImage;