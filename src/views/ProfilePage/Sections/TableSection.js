import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createCareer(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
function createCertification(certyear, certtype, certname, certcenter) {
  return { certyear, certtype, certname, certcenter};
}
function createEx(exname, description) {
  return { exname, description};
}

const rows = [
  createCareer('2020.01 ~ 2020.07', '서울대학교 산학협력단', '개발팀 (연구원)', (<div> 웹 개발</div>),(<div> 요인 분석에 따른 솔루션 추천 프로그램 개발 <br /><br />- Springboot Spring Security<br />
    - BackEnd _ Spring / FrontEnd _ Javascript<br />
    - AWS MariaDB 를 이용한 데이터 CRUD<br />
    - Node.JS 웹서버 구축<br />
    - Excel 기반 데이터 Json으로 변환하여 정보 송 수신</div>)),
  createCareer('2014.08 ~ 2019.01', '㈜하이모', '연구소 (연구원)', (<div> 제품 기획&개발 </div>), (<div> 붙임머리 제품개발 (제품개발) <br /><br />- 컨텐츠 관리(제품사진 및 App컨텐츠 관리 및 업그레이드)<br />역설계 프로그램을 이용한 오차측정 (3D촬영기기 오차측정)</div>)),
  createCareer('2013.03 ~ 2014.08', '㈜레몬아트', '디자인팀 (사원)', (<div> 2D&3D Design</div>), (<div>2D & 3D디자인 (뮤럴벽지 및 인테리어제품)<br /> <br />- 자사특허상품 '꼭꼬핀' 3D설계<br />- 벽지 및 소품 그래픽디자인<br />- 상품 상세페이지 제작</div>)),
];
const rows2 = [
  createCertification('2017.11','자격증','2종보통운전면허','경찰청'),
  createCertification('2012.11','자격증','컬러리스트산업기사','한국산업인력공단'),
  createCertification('2012.07','자격증','컴퓨터그래픽스운용기능사','한국산업인력공단'),
  createCertification('2012.07','자격증','웹디자인기능사','한국산업인력공단'),
  createCertification('','','',''),
  createCertification('2012.07','공모전','	대한민국디자인전람회 입상','디자인진흥원'),
  createCertification('2012.07','공모전','	미래생활미용티슈공모전 장려상','미래생활'),
  createCertification('2012.07','공모전','	인천국제도시디자인 입상','인천광역시'),];

  const rows3 = [
    createEx('Database',(<div>MY-SQL 5.7.26<br />
      ORACLE Release 11.2.0.1<br />
      - DDL, DML, DCL<br />
      - join, subquery<br />
      - java와 연동<br />
      - ERD</div>)),
    createEx('Language',(<div>
      Eclipse Java 2019-03 (java)<br />
      - 기본 문법 및 문제해결 능력 키우기<br />
      - DAO DTO를 이용한 미니샵 구현<br />
      - Server Socket / Socket을 이용하여 Server - Client 프로그램 만들기<br />
      - TCP 프로토콜을 이용한 글자, 사진 전송<br />
      - UDP 프로토콜을 이용한 글자, 사진 전송 (손실율이 많았음)<br />
      - Multi Thread 활용하여 채팅 프로그램 만들기<br />
      - GUI (AWT, Swing)<br />
      VisualStudio Javascript<br />
      - React를 이용한 웹사이트 만들기<br />
      - Redux를 이용한 컴포넌트 상태관리
      </div>)),
    createEx('Framwork ',(<div>Spring 4.1.7 Release<br />
      - Frame Work로 의존 주입<br />
      - Interceptor 기능을 활용한 로그인 유무 검사<br />
      - MVC 모델 기반 게시판 구현<br />
      - Mybatis 설정으로 프로그램 코드와 SQL 쿼리 분리</div>))
  
  ];

  export default function TableSection(props) {
  const classes = useStyles();
  const {type} = props;

  console.log(type)
 
  if(type==="career"){
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>근무기간</TableCell>
            <TableCell >회사명</TableCell>
            <TableCell >부서</TableCell>
            <TableCell >직종</TableCell>
            <TableCell >담당업무 & 프로젝트</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );}
  if(type==="certification"){
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="left">자격/수상명</TableCell>
              <TableCell align="left">취득일/수상일</TableCell>
              <TableCell align="left">구분</TableCell>
              <TableCell align="left">발행처/기관/언어</TableCell>
     
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <TableRow key={row.certname}>
                <TableCell component="th" scope="row">
                  {row.certname}
                </TableCell>
                <TableCell  align="left">{row.certyear}</TableCell>
                <TableCell  align="left">{row.certtype}</TableCell>
                <TableCell  align="left">{row.certcenter}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );}
    if(type==="experiences"){
      return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell align="left">보유기술</TableCell>
                <TableCell align="left">상세설명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows3.map((row) => (
                <TableRow key={row.exname}>
                  <TableCell component="th" scope="row">
                    {row.exname}
                  </TableCell>
                  <TableCell  align="left">{row.description}</TableCell>
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );}
 return(
  <div>{type}</div>
)

}