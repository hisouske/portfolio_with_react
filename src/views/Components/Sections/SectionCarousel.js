import React,{useState} from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import PropTypes from 'prop-types';

import Button from "components/CustomButtons/Button.js";
//NavPills ---------

import Dashboard from "@material-ui/icons/Dashboard";
import HelpOutline from "@material-ui/icons/HelpOutline";
import PlayArrow from "@material-ui/icons/PlayArrow";
import List from "@material-ui/icons/List";
import NavPills from "components/NavPills/NavPills.js";
import image1 from "assets/img/project/colorchart.jpg";
import image2 from "assets/img/project/fishing.jpg";
import image3 from "assets/img/project/cattoyshop.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import Badge from "components/Badge/Badge.js";
import NavPillsContents from "./NavPillsContents";

const useStyles = makeStyles(styles);


export default function SectionCarousel() {

  const [CurrentIndex,setCurrentIndex]=useState(0);     
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    //  fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (current,next) => {setCurrentIndex(next)}
  };


  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
            
          <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
            <Card carousel>
            <NavPillsContents index={CurrentIndex} menu="pptlink"/>

              <Carousel {...settings} >
           <div>
           <img src={image1}  alt="First slide" className="slick-image"/>
     
                  <div className="slick-caption">
                    <h4>
                    {/* <Badge color="primary"> Color chart</Badge> */}
                    </h4>
                  </div>
                  </div>
                <div>
                  <img src={image2} alt="Second slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      {/* <LocationOn className="slick-icons" /> */}
                      {/* <Badge color="primary"> Sea Story</Badge> */}

                    </h4>
                  </div>
                  </div>
                  <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption" >
                    <h4>
                    {/* <Badge color="primary">CatToy Shop</Badge> */}
                    </h4>
                  </div>
                  </div>
              </Carousel>
            </Card>  
            
          </GridItem>

          <GridItem xs={12} sm={12} md={6} lg={6}>
            
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Description",
                    tabIcon: List,
                    tabContent: (
                      <span>
                        <p>
           <NavPillsContents index={CurrentIndex} menu="description"/>
                        </p>
                      </span>
                    )
                  }, {
                    tabButton: "Function",
                    tabIcon: HelpOutline

                    ,
                    tabContent: (

                      
                  <span>
 <NavPillsContents index={CurrentIndex} menu="function"/>
                    <br />
                    {/* <p><i className="fas fa-angle-right" />  RGB / CMYK 값에 따른 컬러구현</p>
                    <p><i className="fas fa-angle-right" />  컬러정보 추가/삭제 (Oracle DB연동)</p>
                    <p><i className="fas fa-angle-right" />  컬러 정보 리스트 (Oracle DB연동)</p> */}
 
                  </span>

          

                      // <ReactPlayer url='https://gdurl.com/lfH0' playing controls className="slick-image"/>
                    )
                  },
                  {
                    tabButton: "Skills",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                        <NavPillsContents index={CurrentIndex} menu="skills"/>
                        </p>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "Video",
                    tabIcon: PlayArrow,
                    tabContent: (
                    //   <Button
                    //   color="danger"
                    //   size="lg"
                    //   href="https://gdurl.com/lfH0"
                    //   target="_blank"
                    //   rel="noopener noreferrer"
                    // >
                    //   <i className="fas fa-play" />
                    //   Watch video
                    // </Button>
<div> <NavPillsContents index={CurrentIndex} menu="video"/></div>
                    )
                  }
                 
                ]}
                
              />
            </GridItem>








{/* 
          <GridItem xs={2} sm={1}>
              <Muted>Github              </Muted>
              <img
                src={github}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={2} sm={1}>
              <Muted>PPT</Muted>
              <img
                src={gppt}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
