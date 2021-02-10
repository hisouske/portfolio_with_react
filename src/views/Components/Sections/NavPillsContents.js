import NavPills from "components/NavPills/NavPills";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";




export default function NavPillsContents(props) {

  const { index,menu} = props;

  const Nav = [
      {id:0, 
        description:(
      <div>
        <h3>Color Chart</h3>
        <br/>
        컬러차트 설명</div>
        ) ,
        skills:"skills0",
        function:"RGB / CMYK 값에 따른 컬러구현"},
      {id:1, 
        description:(
          <div>
            <h3>Sea Story</h3>
            <br/>
            낚시게임 설명</div>
            ) ,
            skills:"skills1",
            function:"func1"},
      {id:2, 
        description:(
          <div>
            <h3>CatToy Shop</h3>
            <br/>
            고양이 쇼핑몰 설명</div>
            ) ,skills:"skills2",function:"func2"}
  ];

// if(menu=="description"){
//   return <div>{Nav[index][menu]}</div>
// }

  return (
    <div>
      {/* {index}{menu} 
        {NavCon().map(item=>{
      return(
        <div>{item.data}</div>
      )
    })} */}
      {Nav[index][menu]}
    </div>
  ); }
