import NavPills from "components/NavPills/NavPills";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles(styles);



export default function NavPillsContents(props) {
  // const classes = useStyles();
  const { index,menu} = props;
  // const {NavCon} = props;

  const Nav2 = [
    
      {id:0, description:"description0",skills:"skills0",function:"func0"},
      {id:1, description: "description1",skills:"skills1",function:"func1"},
      {id:2, description:"description2",skills:"skills2",function:"func2"}
  ];

  console.log(index);
  // const NavCon = [2, 3, 5, 6, 3, 6, 4];

  // const nav1 = NavCon.map(function (test) {
  //   return <li>{test}</li>;
  // });

  return (
    
    <div>
    <div>
      {index}{menu}
      </div>
      
      {Nav2[index][menu]}

    {/* {NavCon().map(item=>{
      return(
        <div>{item.data}</div>
      )
    })} */}
    </div>
  );



  }
