import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import Primary from "components/Typography/Primary.js";
import ReactPlayer from 'react-player';
import Button from "components/CustomButtons/Button.js";
const useStyles = makeStyles(styles);

export default function NavPillsContents(props) {
  const classes = useStyles();
  const { index,menu} = props;

  const Nav = [
      {id:0, 
pptlink:( <a href="https://docs.google.com/presentation/d/1B-nYqVP73tPZOtneuFxAHZBHln-N8dJ_kWvU3yQE2ys/edit?usp=sharing">  <Button target="_blank" justIcon link className={classes.margin5}><i className={"fas fa-file-powerpoint fa-3x"} /></Button>◀ Google Presentation [ColorChart]</a> ),
        description:(
      <div>
        <h3 className={classes.title}> Color Chart
                          

        </h3>
  
        <h7>
        
        <b className={classes.title_desc}>프로젝트명</b><br/>
        - 컬러 차트<br/>
        <b className={classes.title_desc}>프로젝트유형</b><br/>
        - JAVA 1인 프로젝트<br/>
        <b className={classes.title_desc}>프로젝트목적</b><br/>
        - DB에 데이터를 저장하고 Java Swing 을 이용하여 User Interface를 구현 하기<br/>
        <b className={classes.title_desc}>본인의 역할</b><br/>
        - DB 및 프로그램 구조 설계<br/>
        - 해당 색상의 RGB & CMYK 데이터를 저장하고, 불러올 수 있는 프로그램 구현
</h7>
        </div>
        ) ,video:(
        <div>
        <ReactPlayer width="490px"height="250px" url='https://gdurl.com/lfH0' controls />
        </div>
        ),

        skills:(
        <div>
          <h3 className={classes.title}>Skills</h3>
        <h7>Java
        <br/>
        Java Swing
        <br/>
        </h7>
          </div>),
        function:(
        <div>
          <h3 className={classes.title}>Function</h3>
         <h7>- 사용자 로그인
        <br/>
        - 프로그램 실행시 DB에 저장 된 색상정보를 가져와 컬러 구현
        <br/>
        - 원하는 색상 정보를 입력하여 DB에 저장 
        <br/>
          </h7></div>)
          },
      {id:1, 
        pptlink:( <a href="https://docs.google.com/presentation/d/1fxx_X5NPkLiS9TGlQ3HFrXVS-U9X4k28v6pdlORSec0/edit?usp=sharing">  <Button target="_blank" justIcon link className={classes.margin5}><i className={"fas fa-file-powerpoint fa-3x"} /></Button>◀ Google Presentation [SeaStory]</a> ),

        description:(
          <div>
            <h3 className={classes.title}>Sea Story</h3>
         
            <h7>
            <b className={classes.title_desc}>프로젝트명</b><br/>
        - 낚시 게임<br/>
        <b className={classes.title_desc}>프로젝트유형</b><br/>
        - JAVA 2인 팀 프로젝트<br/>
        <b className={classes.title_desc}>프로젝트목적</b><br/>
        - Interface, Extends의 사용 목적을 알고, MouseListener를 이용해 좌표로 GUI 움직임 통제하기<br/>
        <b className={classes.title_desc}>본인의 역할</b><br/>
        - DB 및 프로그램 구조 설계<br/>
        - 낚시 바늘 이동, 물고기와 낚시 바늘 충돌, 데이터베이스에 게임 정보 저장하기


</h7>
</div>
            ) ,video:(
              <div>
              <ReactPlayer width="490px"height="350px" url='https://gdurl.com/Pm58' controls />
              
              </div>
              
                      ),
            function:(<div><h3 className={classes.title}>Function</h3>
     <h7>
        
- 낚시 바늘 이동<br/>

- 물고기와 낚시 바늘 충돌<br/>


- 데이터베이스에 게임 정보 저장하기<br/>


</h7>
        
              </div>),
            skills:(<div><h3 className={classes.title}>Skills</h3>
            
            <h7>Java
            <br/>
            Java Swing
            <br/>
         
              </h7></div>),
},
      {id:2, 
                pptlink:( <a href="https://docs.google.com/presentation/d/1nifIihKGviW0XbNfGZ3UfSQxBFhTAHN6z_nVdkgElAk/edit?usp=sharing">  <Button target="_blank" justIcon link className={classes.margin5}><i className={"fas fa-file-powerpoint fa-3x"} /></Button>◀ Google Presentation [CatToyShop]</a> ),

        description:(
          <div>
            <h3 className={classes.title}>CatToy Shop</h3>
           <h7>
             
           <b className={classes.title_desc}>프로젝트명</b><br/>
        - 고양이 용품 쇼핑몰<br/>
        <b className={classes.title_desc}>프로젝트유형</b><br/>
        - JSP 1인 프로젝트<br/>
        <b className={classes.title_desc}>프로젝트목적</b><br/>
        - JSP MVC2 Model의 업무 처리 흐름을 이해하고 Model, View, Controller의 역할 이해하기<br/>
        <b className={classes.title_desc}>본인의 역할</b><br/>
        
- DB 및 프로그램 구조 설계<br />
- EL, JSTL, JQUERY 등 다양한 문법 사용하여 웹페이지 구현하기<br />
- DB에서 판매량 베스트5 상품 불러오기, 상품 장바구니에 담기, 댓글/대댓글 작성하기<br />
            </h7></div>
            ) ,video:(
              <div>
              <ReactPlayer width="490px"height="350px" playIcon playing url='https://gdurl.com/7AFz' controls />
              
              </div>
              
                      ),skills:(<div><h3 className={classes.title}>Skills</h3>
                        <h7>
                        JSP <br/>
                        JQUERY

                        </h7>

                      </div>),function:(<div><h3 className={classes.title}>Function</h3>
                      <h7>- DB에서 판매량 베스트 5 상품 불러오기< br />
              - 상품 장바구니에 담기< br />
              - 댓글, 대댓글 작성하기</h7></div>)}
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
