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

const rows = [
  createCareer('2020.01 ~ 2020.07', '서울대학교 산학협력단', '개발팀 / 연구원', 'IT(웹개발)',(<div> 요인 분석에 따른 솔루션 추천 프로그램 개발 <br />sssss aa</div>)),
  createCareer('2014.08 ~ 2019.01', 237, 9.0, 37, 4.3),
  createCareer('2013.03 ~ 2014.08', 262, 16.0, 24, 6.0),
  createCareer('Cupcake', 305, 3.7, 67, 4.3),
  createCareer('Gingerbread', 356, 16.0, 49, 3.9),
];
const rows2 = [
  createCertification('2012.11','자격증','컬러리스트산업기사','한국산업인력공단'),];
export default function TableSection(props) {
  const classes = useStyles();
  const {type} = props;

  console.log(type)
 
  if(type=="career"){
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>근무기간</TableCell>
            <TableCell >회사명</TableCell>
            <TableCell >부서/직책</TableCell>
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
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );}
  if(type=="certification"){

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>취득일/수상일</TableCell>
              <TableCell align="right">구분</TableCell>
              <TableCell align="right">자격/수상명</TableCell>
              <TableCell align="right">발행처/기관/언어</TableCell>
     
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <TableRow key={row.certname}>
                <TableCell component="th" scope="row">
                  {row.certname}
                </TableCell>
                <TableCell align="right">{row.certyear}</TableCell>
                <TableCell align="right">{row.certtype}</TableCell>
                <TableCell align="right">{row.certname}</TableCell>
                <TableCell align="right">{row.certcenter}</TableCell>
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