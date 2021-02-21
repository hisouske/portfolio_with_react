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

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Assignment from "@material-ui/icons/Assignment";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Schedule from "@material-ui/icons/Schedule";
import Dashboard from "@material-ui/icons/Dashboard";
import TableSection from "./Sections/TableSection.js";
import { colors } from "@material-ui/core";


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
                   
                    <a href="https://github.com/hisouske">  <Button justIcon link className={classes.margin5}><i className={"fab fa-github fa-3x"} /></Button></a>                    
                    <a href="https://www.behance.net/yuna_/moodboards"> <Button justIcon link className={classes.margin5}> <i className={"fab fa-behance-square fa-3x"} /> </Button></a>
                    <a href="https://10000junior.tistory.com"> <Button justIcon link className={classes.margin5}> <i className={"fas fa-blog fa-3x"} /> </Button></a>
                  

                  </div>
                </div>
                <div className={classes.description}>
              <p>                    
               IT와 동시에 다른 분야에 대한 폭넓은 이해를 가지고있는 T자형 인재에 적합한 사람.{" "}<br/>
             스키마를 어떻게 설계하느냐에 따라 프로그램의 효율성이 결정되듯, <br/>
  창의적인 아이디어는 IT 분야에서도 필요하다고 생각합니다.<br/>
  늘 새로운 아이디어를 통해 성장하는 사람이 되고싶습니다.
              </p>
            </div>
              </GridItem>
         
              <GridItem xs={12} sm={12} md={12} lg={12}>

              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[

                  {
                    tabButton: "Career",
                    tabIcon: Assignment,
                    tabContent: (
                      <span>
                        <TableSection type="career"/>
                      </span>
                    )
                  },
              
//                   {
//                     tabButton: "Background",
//                     tabIcon: Schedule,
//                     tabContent: (
                    
//                     <div>
//                       <div className={classes.description}>
                      
//                        <h7 >
                 
//  데이터베이스에 스키마를 설계할 때 어떻게 설계하느냐에 따라 프로그램의 효율성이 결정되듯, <br/>
//  창의적인 아이디어는 IT 분야에서도 필요하다고 생각합니다.<br/>
//  무에서 유를 창조하는 디자인 경험은, 다양한 사고방식과 창조적인 아이디어를 만들어 내는 데 많은 도움이 되었습니다. <br/>
//  획일화된 IT 업무가 아닌, 창의적인 아이디어를 통해 성장하는 사람이 되고싶습니다.
//  </h7>
//  </div>
//                      </div>
//                     )
//                   },  
                  {
                    tabButton: "Experiences",
                    tabIcon: AssignmentInd,
                    tabContent: (
                      <span>
                      <TableSection type="experiences"/>
                   
                    </span>
                    )
                  }  ,  {
                    tabButton: "Certification",
                    tabIcon: VerifiedUser,
                    tabContent: (
                      <span>
                        <TableSection type="certification"/>
                     
                      </span>
                    )
                  },
                ]}
              />
            </GridItem>
            <br />
            </GridContainer>


           
          </div>
        </div>
      </div>

    </div>
  );
}
