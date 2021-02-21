/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
        
      <ListItem className={classes.listItem}>

        {/* <CustomDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[

            <Link to="/" className={classes.dropdownLink}>
               Project
          </Link>,
            <Link to="/profile-page" className={classes.dropdownLink}>
              Profile
            </Link>,
           <Link to="/landing-page" className={classes.dropdownLink}>
              Stack
         </Link>,
          ]}
        /> */}
      </ListItem>
      
     

      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}>
           <Link to="/profile-page" className={classes.dropdownLink}>
              Profile
            </Link>
        </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}>
           <Link to="/" className={classes.dropdownLink}>
               Project
          </Link>
        </Button>
      </ListItem>
      
    </List>
  );
}
