import React, {useState, useEffect, useContext} from "react";
import { styled } from "@mui/system";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DefaultTheme } from '../themes/DefaultTheme';
import "./scrollBar.css";
import { array } from "yup";
import { DataContext } from "../dataContext";


const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    backgroundColor: DefaultTheme.palette.grayPalette.gray200,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(even)': {
    backgroundColor: DefaultTheme.palette.grayPalette.gray200,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
});


function createData(time, monday, tuesday, wednesday, thursday, friday) {
    return {time, monday, tuesday, wednesday, thursday, friday};
}


const TableComponent = ({ data, timeZone }) => {
  let times = ["6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM","8:30 AM","9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM"]
  const [six, setSix] = useState([times[0]]) 
  const [sixThirty, setSixThirty] = useState([times[1]]) 
  const [seven, setSeven] = useState([times[2]]) 
  const [sevenThirty, setSevenThirty] = useState([times[3]]) 
  const [eight, setEight] = useState([times[4]]) 
  const [eightThirty, setEightThirty] = useState([times[5]]) 
  const [nine, setNine] = useState([times[6]]) 
  const [nineThirty, setNineThirty] = useState([times[7]]) 
  const [ten, setTen] = useState([times[8]]) 
  const [tenThirty, setTenThirty] = useState([times[9]]) 
  const [eleven, setEleven] = useState([times[10]]) 
  const [elevenThirty, setElevenThirty] = useState([times[11]]) 
  const [twelve, setTwelve] = useState([times[12]]) 
  const [twelveThirty, setTwelveThirty] = useState([times[13]])
  const [one, setOne] = useState([times[14]]) 
  const [oneThirty, setOneThirty] = useState([times[15]]) 
  const [two, setTwo] = useState([times[16]]) 
  const [twoThirty, setTwoThirty] = useState([times[17]]) 
  const [three, setThree] = useState([times[18]]) 
  const [threeThirty, setThreeThirty] = useState([times[19]]) 
  const [four, setFour] = useState([times[20]]) 
  const [fourThirty, setFourThirty] = useState([times[21]]) 
  const [five, setFive] = useState([times[22]]) 
  const [fiveThirty, setFiveThirty] = useState([times[23]]) 


  useEffect(() => {
    if (timeZone === "Eastern (EST)") {
      for(let i = 0; i < times.length; i++) {
        const element = times[i];
        let elementArr = element.split("");
        if (elementArr.length < 8) {
          let firstLetter = parseInt(element.substring(0,1));
          const restOfElement = element.slice(1);
          firstLetter += 1
          times[i] = firstLetter + restOfElement;
        }
        if (elementArr.length >= 8) {
          let firstTwoLetters = parseInt(element.substring(0,2));
          const restOfElement = element.slice(2);
          if (firstTwoLetters == 11) {
            firstTwoLetters += 1
            const stringWithoutAM = restOfElement.substring(0, 4);
            times[i] = firstTwoLetters + stringWithoutAM + "PM";
          }
          else if (firstTwoLetters < 11) {
            firstTwoLetters += 1
            times[i] = firstTwoLetters + restOfElement;
          }
          else if (firstTwoLetters === 12) {
            firstTwoLetters -= 11;
            const restOfElement = element.slice(2);
            times[i] = firstTwoLetters + restOfElement;
          }
        }
        
      }
    }

    else if (timeZone === "Mountain (MST)"){
      for(let i = 0; i < times.length; i++) {
        const element = times[i];
        let elementArr = element.split("");
        if (elementArr.length < 8) {
          let firstLetter = parseInt(element.substring(0,1));
          const restOfElement = element.slice(1);
          if(firstLetter === 1){
            firstLetter += 12;
          }
          firstLetter -= 1
          times[i] = firstLetter + restOfElement;
        }
        if (elementArr.length >= 8) {
          let firstTwoLetters = parseInt(element.substring(0,2));
          const restOfElement = element.slice(2);
          if (firstTwoLetters === 12) {
            firstTwoLetters -= 1
            const stringWithoutPM = restOfElement.substring(0, 4);
            times[i] = firstTwoLetters + stringWithoutPM + "AM";
          }
          else if (firstTwoLetters < 12) {
            firstTwoLetters -= 1
            times[i] = firstTwoLetters + restOfElement;
          }
        }
      }
    }

    else if (timeZone === "Pacific (PST)"){
      for(let i = 0; i < times.length; i++) {
        const element = times[i];
        let elementArr = element.split("");
        if (elementArr.length < 8) {
          let firstLetter = parseInt(element.substring(0,1));
          const restOfElement = element.slice(1);
          if(firstLetter === 1 || firstLetter === 2){
            firstLetter += 12;
          }
          firstLetter -= 2
          if (parseInt(elementArr[0]) === 1) {
            const stringWithoutPM = restOfElement.substring(0, 4);
            times[i] = firstLetter + stringWithoutPM + "AM"
          } else {
            times[i] = firstLetter + restOfElement;
          }
        }
        if (elementArr.length >= 8) {
          let firstTwoLetters = parseInt(element.substring(0,2));
          const restOfElement = element.slice(2);
          if (firstTwoLetters === 12) {
            firstTwoLetters -= 2
            const stringWithoutPM = restOfElement.substring(0, 4);
            times[i] = firstTwoLetters + stringWithoutPM + "AM";
          }
          else if (firstTwoLetters < 12) {
            firstTwoLetters -= 2
            times[i] = firstTwoLetters + restOfElement;
          }
        }
      }
    }

    else if (timeZone === "Alaska (AKST)"){
      for(let i = 0; i < times.length; i++) {
        const element = times[i];
        let elementArr = element.split("");
        if (elementArr.length < 8) {
          let firstLetter = parseInt(element.substring(0,1));
          const restOfElement = element.slice(1);
          if(firstLetter === 1 || firstLetter === 2 || firstLetter === 3 || firstLetter === 4){
            firstLetter += 12;
          }
          firstLetter -= 4
          if (parseInt(elementArr[0]) === 1 || parseInt(elementArr[0]) === 2 || parseInt(elementArr[0]) === 3) {
            const stringWithoutPM = restOfElement.substring(0, 4);
            times[i] = firstLetter + stringWithoutPM + "AM";
          } else {
            times[i] = firstLetter + restOfElement;
          }
        }
        if (elementArr.length >= 8) {
          let firstTwoLetters = parseInt(element.substring(0,2));
          const restOfElement = element.slice(2);
          if (firstTwoLetters === 12) {
            firstTwoLetters -= 4
            const stringWithoutPM = restOfElement.substring(0, 4);
            times[i] = firstTwoLetters + stringWithoutPM + "AM";
          }
          else if (firstTwoLetters < 12) {
            firstTwoLetters -= 4
            times[i] = firstTwoLetters + restOfElement;
          }
        }
      }
    }

    else if (timeZone === "Hawaii (HAST)"){
      for(let i = 0; i < times.length; i++) {
        const element = times[i];
        let elementArr = element.split("");
        if (elementArr.length < 8) {
          let firstLetter = parseInt(element.substring(0,1));
          const restOfElement = element.slice(1);
          if(firstLetter === 1 || firstLetter === 2 || firstLetter === 3 || firstLetter === 4 || firstLetter === 5){
            firstLetter += 12;
          }
          firstLetter -= 5
          if (parseInt(elementArr[0]) === 1 || parseInt(elementArr[0]) === 2 || parseInt(elementArr[0]) === 3 || parseInt(elementArr[0]) === 4) {
            const stringWithoutPM = restOfElement.substring(0, 4);
            times[i] = firstLetter + stringWithoutPM + "AM";
          } else {
            times[i] = firstLetter + restOfElement;
          }
        }
        if (elementArr.length >= 8) {
          let firstTwoLetters = parseInt(element.substring(0,2));
          const restOfElement = element.slice(2);
          if (firstTwoLetters === 12) {
            firstTwoLetters -= 5
            const stringWithoutPM = restOfElement.substring(0, 4);
            times[i] = firstTwoLetters + stringWithoutPM + "AM";
          }
          else if (firstTwoLetters < 12) {
            firstTwoLetters -= 5
            times[i] = firstTwoLetters + restOfElement;
          }
        }
      }
    }


    let sixArray = [...six];
    sixArray.shift();
    sixArray.unshift(times[0]);
    setSix(sixArray);

    let six30Array = [...sixThirty];
    six30Array.shift();
    six30Array.unshift(times[1]);
    setSixThirty(six30Array);

    let sevenArray = [...seven];
    sevenArray.shift();
    sevenArray.unshift(times[2]);
    setSeven(sevenArray);

    let seven30Array = [...sevenThirty];
    seven30Array.shift();
    seven30Array.unshift(times[3]);
    setSevenThirty(seven30Array);

    let eightArray = [...eight];
    eightArray.shift();
    eightArray.unshift(times[4]);
    setEight(eightArray);

    let eight30Array = [...eightThirty];
    eight30Array.shift();
    eight30Array.unshift(times[5]);
    setEightThirty(eight30Array);

    let nineArray = [...nine];
    nineArray.shift();
    nineArray.unshift(times[6]);
    setNine(nineArray);

    let nine30Array = [...nineThirty];
    nine30Array.shift();
    nine30Array.unshift(times[7]);
    setNineThirty(nine30Array);

    let tenArray = [...ten];
    tenArray.shift();
    tenArray.unshift(times[8]);
    setTen(tenArray);

    let ten30Array = [...tenThirty];
    ten30Array.shift();
    ten30Array.unshift(times[9]);
    setTenThirty(ten30Array);

    let elevenArray = [...eleven];
    elevenArray.shift();
    elevenArray.unshift(times[10]);
    setEleven(elevenArray);

    let eleven30Array = [...elevenThirty];
    eleven30Array.shift();
    eleven30Array.unshift(times[11]);
    setElevenThirty(eleven30Array);

    let twelveArray = [...twelve];
    twelveArray.shift();
    twelveArray.unshift(times[12]);
    setTwelve(twelveArray);

    let twelve30Array = [...twelveThirty];
    twelve30Array.shift();
    twelve30Array.unshift(times[13]);
    setTwelveThirty(twelve30Array);

    let oneArray = [...one];
    oneArray.shift();
    oneArray.unshift(times[14]);
    setOne(oneArray);

    let one30Array = [...oneThirty];
    one30Array.shift();
    one30Array.unshift(times[15]);
    setOneThirty(one30Array);

    let twoArray = [...two];
    twoArray.shift();
    twoArray.unshift(times[16]);
    setTwo(twoArray);

    let two30Array = [...twoThirty];
    two30Array.shift();
    two30Array.unshift(times[17]);
    setTwoThirty(two30Array);

    let threeArray = [...three];
    threeArray.shift();
    threeArray.unshift(times[18]);
    setThree(threeArray);

    let three30Array = [...threeThirty];
    three30Array.shift();
    three30Array.unshift(times[19]);
    setThreeThirty(three30Array);

    let fourArray = [...four];
    fourArray.shift();
    fourArray.unshift(times[20]);
    setFour(fourArray);

    let four30Array = [...fourThirty];
    four30Array.shift();
    four30Array.unshift(times[21]);
    setFourThirty(four30Array);

    let fiveArray = [...five];
    fiveArray.shift();
    fiveArray.unshift(times[22]);
    setFive(fiveArray);

    let five30Array = [...fiveThirty];
    five30Array.shift();
    five30Array.unshift(times[23]);
    setFiveThirty(five30Array);
  }, [timeZone])


  const rows = [
      createData(six[0], six[1], six[2], six[3], six[4], six[5]),
      createData(sixThirty[0], sixThirty[1], sixThirty[2], sixThirty[3], sixThirty[4], sixThirty[5]),
      createData(seven[0], seven[1], seven[2], seven[3], seven[4], seven[5]),
      createData(sevenThirty[0], sevenThirty[1], sevenThirty[2], sevenThirty[3], sevenThirty[4], sevenThirty[5]),
      createData(eight[0], eight[1], eight[2], eight[3], eight[4], eight[5]),
      createData(eightThirty[0], eightThirty[1], eightThirty[2], eightThirty[3], eightThirty[4], eightThirty[5]),
      createData(nine[0], nine[1], nine[2], nine[3], nine[4], nine[5]),
      createData(nineThirty[0], nineThirty[1], nineThirty[2], nineThirty[3], nineThirty[4], nineThirty[5]),
      createData(ten[0], ten[1], ten[2], ten[3], ten[4], ten[5]),
      createData(tenThirty[0], tenThirty[1], tenThirty[2], tenThirty[3], tenThirty[4], tenThirty[5]),
      createData(eleven[0], eleven[1], eleven[2], eleven[3], eleven[4], eleven[5]),
      createData(elevenThirty[0], elevenThirty[1], elevenThirty[2], elevenThirty[3], elevenThirty[4], elevenThirty[5]),
      createData(twelve[0], twelve[1], twelve[2], twelve[3], twelve[4], twelve[5]),
      createData(twelveThirty[0], twelveThirty[1], twelveThirty[2], twelveThirty[3], twelveThirty[4], twelveThirty[5]),
      createData(one[0], one[1], one[2], one[3], one[4], one[5]),
      createData(oneThirty[0], oneThirty[1], oneThirty[2], oneThirty[3], oneThirty[4], oneThirty[5]),
      createData(two[0], two[1], two[2], two[3], two[4], two[5]),
      createData(twoThirty[0], twoThirty[1], twoThirty[2], twoThirty[3], twoThirty[4], twoThirty[5]),
      createData(three[0], three[1], three[2], three[3], three[4], three[5]),
      createData(threeThirty[0], threeThirty[1], threeThirty[2], threeThirty[3], threeThirty[4], threeThirty[5]),
      createData(four[0], four[1], four[2], four[3], four[4], four[5]),
      createData(fourThirty[0], fourThirty[1], fourThirty[2], fourThirty[3], fourThirty[4], fourThirty[5]),
      createData(five[0], five[1], five[2], five[3], five[4], five[5]),
      createData(fiveThirty[0], fiveThirty[1], fiveThirty[2], fiveThirty[3], fiveThirty[4], fiveThirty[5]),
  ];
  useEffect(() => {
    data.forEach(arr => {
      arr.summaries.forEach(element => {
        if (element.startTime === "06:00") {
          setSix(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "06:30") {
          setSixThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "07:00") {
          setSeven(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "07:30") {
          setSevenThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "08:00") {
          setEight(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "08:30") {
          setEightThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "09:00") {
          setNine(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "09:30") {
          setNineThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "10:00") {
          setTen(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "10:30") {
          setTenThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "11:00") {
          setEleven(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "11:30") {
          setElevenThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "12:00") {
          setTwelve(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "12:30") {
          setTwelveThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "13:00") {
          setOne(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "13:30") {
          setOneThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "14:00") {
          setTwo(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "14:30") {
          setTwoThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "15:00") {
          setThree(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "15:30") {
          setThreeThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "16:00") {
          setFour(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "16:30") {
          setFourThirty(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "17:00") {
          setFive(prevState => [...prevState, element.userCount])
        }
        if (element.startTime === "17:30") {
          setFiveThirty(prevState => [...prevState, element.userCount])
        }
      })
    });

  },[]);
  const {userList} = useContext(DataContext)
  const highlightGreen = (val) => {
    if (val >= userList.length * 0.6) {
      return {backgroundColor: DefaultTheme.palette.greenPalette.green200, color: "white", borderRadius: '5px', height: "24px", width: "60px", display: "flex", justifyContent: "center", alignItems: "center"}
    }
    return {backgroundColor: "inherit"}
  }
    return(
    <TableContainer component={Paper} sx={{borderRadius: "15px", maxHeight: "700px", width: "1500px"}}>
      <Table aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Monday</StyledTableCell>
            <StyledTableCell align="center">Tuesday</StyledTableCell>
            <StyledTableCell align="center">Wednesday</StyledTableCell>
            <StyledTableCell align="center">Thursday</StyledTableCell>
            <StyledTableCell align="center">Friday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.time}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.time}
              </StyledTableCell>
              <StyledTableCell align="center">
                <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <div style={highlightGreen(row.monday)}>{row.monday}</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <div style={highlightGreen(row.tuesday)}>{row.tuesday}</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <div style={highlightGreen(row.wednesday)}>{row.wednesday}</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <div style={highlightGreen(row.thursday)}>{row.thursday}</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">
                <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <div style={highlightGreen(row.friday)}>{row.friday}</div>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export {TableComponent};

