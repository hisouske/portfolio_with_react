import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import GridContainer from "components/Grid/GridContainer.js";

import ReactPlayer from 'react-player';
const useStyles = makeStyles(styles);

export default function NavPillsContents(props) {
  const classes = useStyles();
  const { index,menu} = props;

  const Nav = [
      {id:0, 
        description:(
      <div>
        <h3 className={classes.title}>  <i class="fas fa-caret-right"/> Color Chart</h3>
        <br/>
        <h5>Java Swing 을 이용해서 UI를 구현한 컬러차트 프로그램.
        <br/>
        해당 색상의 RGB & CMYK 값을 저장하여 정보를 DB에 쉽게 저장하고 불러올 수 있도록 제작했으며,
        색상을 즉시 시각적으로 확인 할 수 있다.

        
        </h5></div>
        ) ,video:(
<div>
<ReactPlayer width="490px"height="250px" url='https://gdurl.com/lfH0' controls />

</div>

        ),

        skills:(<div><h3 className={classes.title}><i class="far fa-star-half fa-1x"/>Skills</h3>
        <br/>
        <h5>Java
        <br/>
        Java Swing
        <br/>
     
          </h5></div>),
        function:(<div><h3 className={classes.title}><i class="far fa-star-half fa-1x"/>Function</h3>
        <br/>
        <h5>- 사용자 로그인
        <br/>
        - 프로그램 실행시 DB에 저장 된 색상정보를 가져와 컬러 구현
        <br/>
        - 원하는 색상 정보를 입력하여 DB에 저장 
        <br/>
          </h5></div>),},
      {id:1, 
        description:(
          <div>
            <h3 className={classes.title}>Sea Story</h3>
            <br/>
            <p>
            프로젝트명: 낚시 게임
            </p>
            <p>
프로젝트 유형: JAVA 2인 팀 프로젝트
</p>
<p>
프로젝트 목적: Interface, Extends의 사용 목적을 알고, MouseListener를 이용해 좌표로 GUI 움직임 통제하기
</p>

<p>
프로젝트에 대한 본인의 역할:</p>
<p>
- DB 및 프로그램 구조 설계</p><p>
- 낚시 바늘 이동, 물고기와 낚시 바늘 충돌, 데이터베이스에 게임 정보 저장하기
</p>
</div>
            ) ,video:(
              <div>
              <ReactPlayer width="490px"height="350px" url='https://gdurl.com/Pm58' controls />
              
              </div>
              
                      ),
            function:(<div><h3 className={classes.title}><i class="far fa-star-half fa-1x"/>Function</h3>
            <br/>
            
            <br/>
            <p>

- 낚시 바늘 이동
</p>
<p>
- 물고기와 낚시 바늘 충돌
</p>
<p>
- 데이터베이스에 게임 정보 저장하기

</p>
            <br/>
        
              </div>),
            skills:(<div><h3 className={classes.title}><i class="far fa-star-half fa-1x"/>Skills</h3>
            <br/>
            <h5>Java
            <br/>
            Java Swing
            <br/>
         
              </h5></div>),
},
      {id:2, 
        description:(
          <div>
            <h3 className={classes.title}>CatToy Shop</h3>
           <p> 프로젝트명: 고양이 용품 쇼핑몰</p>
<p>프로젝트 유형: JSP 1인 프로젝트</p>
<p>프로젝트 목적: JSP MVC2 Model의 업무 처리 흐름을 이해하고 Model, View, Controller의 역할 이해하기</p>
<p>프로젝트에 대한 본인의 역할 :</p>
<p>- DB 및 프로그램 구조 설계</p>
<p>- EL, JSTL, JQUERY 등 다양한 문법 사용하여 웹페이지 구현하기</p>
<p>- DB에서 판매량 베스트5 상품 불러오기, 상품 장바구니에 담기, 댓글/대댓글 작성하기</p>
            고양이 쇼핑몰 설명</div>
            ) ,video:(
              <div>
              <ReactPlayer width="490px"height="350px" playIcon playing url='https://gdurl.com/7AFz' controls />
              
              </div>
              
                      ),skills:"skills2",function:(<div><p>① DB에서 판매량 베스트 5 상품 불러오기</p>
              <p>② 상품 장바구니에 담기</p>
              <p>③ 댓글, 대댓글 작성하기</p></div>)}
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
