import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import ReactPlayer from 'react-player';

import Button from "components/CustomButtons/Button.js";
//NavPills ---------
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import NavPills from "components/NavPills/NavPills.js";
import image1 from "assets/img/project/colorchart.jpg";
import image2 from "assets/img/project/fishing.jpg";
import image3 from "assets/img/bg3.jpg";
import Muted from "components/Typography/Muted.js";
import github from "assets/img/program/github.jpg";
import gppt from "assets/img/program/googleppt.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import Badge from "components/Badge/Badge.js";
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
          <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                
                  <div className="slick-caption">
                    <h4>
                    <Badge color="primary">Sea story</Badge>
                    </h4>
                  </div>
                </div>
                <div>
                {/* <ReactPlayer url='https://gdurl.com/Pm58' center playing controls className="slick-image"/> */}
              
                  <img src={image2} alt="Second slide" className="slick-image" />
                 
                  <div className="slick-caption">
                    <h4>
                      {/* <LocationOn className="slick-icons" /> */}
                      Sea Story

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                
                  <div className="slick-caption" >
                    <h4>
                    <Badge color="primary">primary</Badge>
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
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Skills",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Video",
                    tabIcon: Schedule,
                    tabContent: (

                      <Button
                      color="danger"
                      size="lg"
                      href="https://gdurl.com/lfH0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play" />
                      Watch video
                    </Button>

                      // <ReactPlayer url='https://gdurl.com/lfH0' playing controls className="slick-image"/>
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
