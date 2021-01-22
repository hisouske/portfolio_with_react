import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import ReactPlayer from 'react-player';
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import github from "assets/img/program/github.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  {/* <img src={image1} alt="First slide" className="slick-image" /> */}
                  <ReactPlayer url='https://gdurl.com/lfH0' playing controls className="slick-image"/>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Color Chart
                    </h4>
                  </div>
                </div>
                <div>
                <ReactPlayer url='https://gdurl.com/Pm58' center playing controls className="slick-image"/>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Sea Story

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                        -------
                    </h4>
                  </div>
                </div>
              </Carousel>
        
            </Card>
            
          </GridItem>
          <GridItem xs={2} sm={2}>
              <h4>Github</h4>
              <img
                src={github}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
