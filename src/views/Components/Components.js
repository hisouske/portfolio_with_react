import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
// import SectionBasics from "./Sections/SectionBasics.js";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import SectionTabs from "./Sections/SectionTabs.js";
// import SectionPills from "./Sections/SectionPills.js";
// import SectionNotifications from "./Sections/SectionNotifications.js";
// import SectionTypography from "./Sections/SectionTypography.js";
// import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
// import SectionExamples from "./Sections/SectionExamples.js";


import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Portfolio with React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg7.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Portfol55555io with React.</h1>
                <h3 className={classes.subtitle}>
               5555555   A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
        </div>
        <div className={classes.typo}>
        <div className={classes.container}>
              <h1 className={classes.subtitle}>The Life of Material Kit</h1>
            </div>
            </div>
        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills /> */}
        {/* <SectionNotifications /> */}
        {/* <SectionTypography />
        <SectionJavascript />
        <SectionCompletedExamples /> */}
        {/* <SectionExamples /> */}
     
    
    </div>
  );
}
