import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
// import Card from "components/Card/Card.js";

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/yuna.jpg";

// import html from "assets/img/program/html.png";
// import jsp from "assets/img/program/jsp.png";
// import react from "assets/img/program/react.png";
// import bootstrap from "assets/img/program/bootstrap.png";
// import css from "assets/img/program/css.png";
// import redux from "assets/img/program/redux.png";
// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";



import Schedule from "@material-ui/icons/Schedule";
import Dashboard from "@material-ui/icons/Dashboard";
import TableSection from "./Sections/TableSection.js";




const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  //  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Portfolio with React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Yuna.K</h3>
                    <h6>PROGRAMMER && DESIGNER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-behance-square fa-3x"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
              <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
              <GridItem xs={12} sm={12} md={10} lg={10}>

              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[

                  {
                    tabButton: "Career",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <TableSection type="career"/>
                     
                      </span>
                    )
                  },
                  {
                    tabButton: "Certification",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <TableSection type="certification"/>
                     
                      </span>
                    )
                  },
                  {
                    tabButton: "Background",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <i className="fab fa-instagram" />
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
                  }
                ]}
              />
            </GridItem>
            </GridContainer>
            aaaaaaaaaaaaaaaaa


           
          </div>
        </div>
      </div>

    </div>
  );
}
