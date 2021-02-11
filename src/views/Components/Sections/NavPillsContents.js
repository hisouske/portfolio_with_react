import React from "react";




export default function NavPillsContents(props) {

  const { index,menu} = props;

  const Nav = [
      {id:0, 
        description:(
      <div>
        <h3>  <i class="far fa-star-half fa-1x"/>Color Chart</h3>
        <br/>
        <h5>Java Swing 을 이용해서 UI를 구현한 컬러차트 프로그램.
        <br/>
        해당 색상의 RGB & CMYK 값을 저장하여 정보를 DB에 쉽게 저장하고 불러올 수 있도록 했으며,
        색상을 즉시 시각적으로 확인 할 수 있다.

        
        </h5></div>
        ) ,
        skills:(<div><h3><i class="far fa-star-half fa-1x"/>Skills</h3>
        <br/>
        <h5>Java
        <br/>
        Java Swing
        <br/>
     
          </h5></div>),
        function:(<div><h3><i class="far fa-star-half fa-1x"/>Function</h3>
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
            <h3>Sea Story</h3>
            <br/>
            낚시게임 설명</div>
            ) ,
            skills:(<div><h3><i class="far fa-star-half fa-1x"/>Skills</h3>
            <br/>
            <h5>Java
            <br/>
            Java Swing
            <br/>
         
              </h5></div>),
            function:(<div><h3><i class="far fa-star-half fa-1x"/>Function</h3>
            <br/>
            <h5>- 낚시 바늘 이동
            <br/>
            - 물고기와 낚시 바늘 충돌
            <br/>
            - 데이터베이스에 게임 정보 저장하기
            <br/>
              </h5></div>),},
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
