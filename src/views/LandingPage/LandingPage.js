import React from "react";
// nodejs library that concatenates classes



import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

//
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import html from "assets/img/program/html.png";
import bootstrap from "assets/img/program/bootstrap.png";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import react from "assets/img/program/react.png";

// import redux from "assets/img/program/redux.png";

import work1 from "assets/img/examples/olu-eletu.jpg";

//from Profile----- skills

import Schedule from "@material-ui/icons/Schedule";
import NavPills from "components/NavPills/NavPills.js";
import Dashboard from "@material-ui/icons/Dashboard";
import TableSection from "../ProfilePage/Sections/TableSection.js";




const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;


const navImageClasses = classNames(
  classes.imgRounded, classes.imgGallery);  
return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Portfolio with React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised,classes.logo)}>
      <div>
        <div className={classes.logo}>
          <GridContainer>
      
          </GridContainer>
          <GridContainer justify="center">
        
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Front-End",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                       
                        <i className="fab fa-js-square fa-7x" />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                        <i
                            className={"fab fa-react fa-7x"}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                           <i
                            className={"fab fa-html5 fa-7x"}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                           <i
                            className={"fab fa-css3-alt fa-7x"}
                          />
                        </GridItem>
                           <GridItem xs={12} sm={12} md={4}>
                           <i
                            className={"fab fa-bootstrap fa-7x"}
                          />
                        </GridItem>
                      </GridContainer>
                      )
                    },
                    {
                      tabButton: "Back-End",
                      tabIcon: Palette,
                      tabContent: (
                       
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                         
                          <i className="fab fa-instagram fa-7x" />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <i
                              className={"fab fa-java fa-7x"}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                             <i
                              className={"fab fa-node fa-7x"}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Library",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={react}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={html}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Design",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={react}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={html}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                    
                  ]}
                />
              </GridItem>
            </GridContainer>
            <ProductSection />
            </div>
            </div>
        </div>
        </div>
 
  );
}
