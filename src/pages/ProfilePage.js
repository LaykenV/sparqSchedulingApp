import React, { useContext, useEffect, useState } from 'react';
import { DefaultTheme } from '../themes/DefaultTheme';
import InputComponent from '../components/InputComponent';
import  Dropdown  from '../components/Dropdown';
import { CustomChip } from '../components/CustomChip';
import { DataContext } from '../dataContext';
import CustomButton from "../components/CustomButton";
import "./profilePage.css";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button'
import { display } from '@mui/system';
import { useFormik, Formik, Form, FieldArray } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Flex, useAuthenticator } from '@aws-amplify/ui-react';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import NavBar from '../components/NavBar';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { ToastComponent } from '../components/ToastComponent';




const ProfilePage = ({children}) => {
    const { timeZones, studioOptions, regionOptions, managerOptions, practiceAreas, levelOptions, timeOptions, userList} = useContext(DataContext);
    const [graduate, setGraduate] = useState(true);
    const { signOut, user } = useAuthenticator((context) => [context.user]);
    const [userID, setUserID] = useState(0);
    const [userAvailabilityIds, setUserAvailabilityIds] = useState([]);
    const [userAvailabilities, setUserAvailabilities] = useState([]);
    const [mondayAvailabilities, setMondayAvailabilites] = useState([]);
    const [tuesdayAvailabilities, setTuesdayAvailabilites] = useState([]);
    const [wednesdayAvailabilities, setWednesdayAvailabilites] = useState([]);
    const [thursdayAvailabilities, setThursdayAvailabilites] = useState([]);
    const [fridayAvailabilities, setFridayAvailabilites] = useState([]);
    const [condensedMondayAvailabilities, setCondensedMondayAvailabilites] = useState([]);
    const [condensedTuesdayAvailabilities, setCondensedTuesdayAvailabilites] = useState([]);
    const [condensedWednesdayAvailabilities, setCondensedWednesdayAvailabilites] = useState([]);
    const [condensedThursdayAvailabilities, setCondensedThursdayAvailabilites] = useState([]);
    const [condensedFridayAvailabilities, setCondensedFridayAvailabilites] = useState([]);
    const [jwtToken, setJwtToken] = useState("");


    const logOut = () => {
        signOut();
        useNavigate("/");
      }

      useEffect(()=> {
        fetchUserID();
        setJwtToken(user.signInUserSession.accessToken.jwtToken);
      }, [userList]);
      

      useEffect(() => {
        fetchAvailabilitesByUserID();
      }, [userID]);

      useEffect(() => {
        let consolidatedAvailabilities = [];
        let currentStartTime = "";
        for (let i = 0; i < mondayAvailabilities.length; i++) {
            const element = mondayAvailabilities[i];
            const startTimeIndex = timeOptions.map(e => e.name).indexOf(element.startTime);
            const endTimeIndex = timeOptions.map(e => e.name).indexOf(element.endTime);
            if (i === 0) {
                currentStartTime = element.startTime;
                continue;
                if (mondayAvailabilities.length === 1) {
                    consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                    currentStartTime = "";
                    continue
                }
            }
            if (!mondayAvailabilities[i + 1]) { 
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (endTimeIndex !== timeOptions.map(e => e.name).indexOf(mondayAvailabilities[i + 1].startTime)) {
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (startTimeIndex !== timeOptions.map(e => e.name).indexOf(mondayAvailabilities[i - 1].endTime)) {
                currentStartTime = element.startTime;
            }
        }
        setCondensedMondayAvailabilites(consolidatedAvailabilities);
      }, [mondayAvailabilities]);

      useEffect(() => {
        let consolidatedAvailabilities = [];
        let currentStartTime = "";
        for (let i = 0; i < tuesdayAvailabilities.length; i++) {
            const element = tuesdayAvailabilities[i];
            const startTimeIndex = timeOptions.map(e => e.name).indexOf(element.startTime);
            const endTimeIndex = timeOptions.map(e => e.name).indexOf(element.endTime);
            if (i === 0) {
                currentStartTime = element.startTime;
                continue;
                if (tuesdayAvailabilities.length === 1) {
                    consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                    currentStartTime = "";
                    continue
                }
            }
            if (!tuesdayAvailabilities[i + 1]) { 
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (endTimeIndex !== timeOptions.map(e => e.name).indexOf(tuesdayAvailabilities[i + 1].startTime)) {
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (startTimeIndex !== timeOptions.map(e => e.name).indexOf(tuesdayAvailabilities[i - 1].endTime)) {
                currentStartTime = element.startTime;
            }
        }
        setCondensedTuesdayAvailabilites(consolidatedAvailabilities);
      }, [tuesdayAvailabilities]);

      useEffect(() => {
        let consolidatedAvailabilities = [];
        let currentStartTime = "";
        for (let i = 0; i < wednesdayAvailabilities.length; i++) {
            const element = wednesdayAvailabilities[i];
            const startTimeIndex = timeOptions.map(e => e.name).indexOf(element.startTime);
            const endTimeIndex = timeOptions.map(e => e.name).indexOf(element.endTime);
            if (i === 0) {
                currentStartTime = element.startTime;
                continue;
                if (wednesdayAvailabilities.length === 1) {
                    consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                    currentStartTime = "";
                    continue
                }
            }
            if (!wednesdayAvailabilities[i + 1]) { 
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (endTimeIndex !== timeOptions.map(e => e.name).indexOf(wednesdayAvailabilities[i + 1].startTime)) {
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (startTimeIndex !== timeOptions.map(e => e.name).indexOf(wednesdayAvailabilities[i - 1].endTime)) {
                currentStartTime = element.startTime;
            }
        }
        setCondensedWednesdayAvailabilites(consolidatedAvailabilities);
      }, [wednesdayAvailabilities]);

      useEffect(() => {
        let consolidatedAvailabilities = [];
        let currentStartTime = "";
        for (let i = 0; i < thursdayAvailabilities.length; i++) {
            const element = thursdayAvailabilities[i];
            const startTimeIndex = timeOptions.map(e => e.name).indexOf(element.startTime);
            const endTimeIndex = timeOptions.map(e => e.name).indexOf(element.endTime);
            if (i === 0) {
                currentStartTime = element.startTime;
                continue;
                if (thursdayAvailabilities.length === 1) {
                    consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                    currentStartTime = "";
                    continue
                }
            }
            if (!thursdayAvailabilities[i + 1]) { 
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (endTimeIndex !== timeOptions.map(e => e.name).indexOf(thursdayAvailabilities[i + 1].startTime)) {
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (startTimeIndex !== timeOptions.map(e => e.name).indexOf(thursdayAvailabilities[i - 1].endTime)) {
                currentStartTime = element.startTime;
            }
        }
        setCondensedThursdayAvailabilites(consolidatedAvailabilities);
      }, [thursdayAvailabilities]);

      useEffect(() => {
        let consolidatedAvailabilities = [];
        let currentStartTime = "";
        for (let i = 0; i < fridayAvailabilities.length; i++) {
            const element = fridayAvailabilities[i];
            const startTimeIndex = timeOptions.map(e => e.name).indexOf(element.startTime);
            const endTimeIndex = timeOptions.map(e => e.name).indexOf(element.endTime);
            if (i === 0) {
                currentStartTime = element.startTime;
                continue;
                if (fridayAvailabilities.length === 1) {
                    consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                    currentStartTime = "";
                    continue
                }
            }
            if (!fridayAvailabilities[i + 1]) { 
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (endTimeIndex !== timeOptions.map(e => e.name).indexOf(fridayAvailabilities[i + 1].startTime)) {
                consolidatedAvailabilities.push({startTime: currentStartTime, endTime: element.endTime});
                currentStartTime = "";
                continue
            }
            if (startTimeIndex !== timeOptions.map(e => e.name).indexOf(fridayAvailabilities[i - 1].endTime)) {
                currentStartTime = element.startTime;
            }
        }
        setCondensedFridayAvailabilites(consolidatedAvailabilities);
      }, [fridayAvailabilities]);

      useEffect(() => {
        let monAvailabilities = [];
        let tuesAvailabilities = [];
        let wedAvailabilities = [];
        let thursAvailabilities = [];
        let friAvailabilities = [];
        userAvailabilities.forEach(element => {
            if (element.dayOfTheWeek === 1) {
                monAvailabilities.push({startTime: convertDateTimeToTime(element.startTime), endTime: convertDateTimeToTime(element.endTime), id: element.id});
            }
            if (element.dayOfTheWeek === 2) {
                tuesAvailabilities.push({startTime: convertDateTimeToTime(element.startTime), endTime: convertDateTimeToTime(element.endTime), id: element.id});
            }
            if (element.dayOfTheWeek === 3) {
                wedAvailabilities.push({startTime: convertDateTimeToTime(element.startTime), endTime: convertDateTimeToTime(element.endTime), id: element.id});
            }
            if (element.dayOfTheWeek === 4) {
                thursAvailabilities.push({startTime: convertDateTimeToTime(element.startTime), endTime: convertDateTimeToTime(element.endTime), id: element.id});
            }
            if (element.dayOfTheWeek === 5) {
                friAvailabilities.push({startTime: convertDateTimeToTime(element.startTime), endTime: convertDateTimeToTime(element.endTime), id: element.id});
            }
        })
        setMondayAvailabilites(monAvailabilities);
        setTuesdayAvailabilites(tuesAvailabilities);
        setWednesdayAvailabilites(wedAvailabilities);
        setThursdayAvailabilites(thursAvailabilities);
        setFridayAvailabilites(friAvailabilities);
      }, [userAvailabilities])

      useEffect(() => {
        const fetchAllAvailabilites = async () => {
            let responseArr = [];
            for(const element of userAvailabilityIds) {
                const availabilityID = element.availabilityId;
                const url = `http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/Availability/${availabilityID}`;
                const headers = {'Authorization': `Bearer ${jwtToken}` };
                const response = await axios.get(url);
                responseArr.push(response.data);
            }
            function compare( a, b ) {
                if ( a.startTime.substr(11, 12) < b.startTime.substr(11, 12) ){
                  return -1;
                }
                if ( a.startTime.substr(11, 12) > b.startTime.substr(11, 12) ){
                  return 1;
                }
                return 0;
              }
              
            responseArr.sort(compare);
            setUserAvailabilities(prevState => [...prevState, ...responseArr]);
        }
        fetchAllAvailabilites()
      }, [userAvailabilityIds])



      const fetchUserID = () => {
        userList.forEach(element => {
            if (element.email === user.attributes.email) {
                setUserID(element.id);
            }
        })
    }

    const fetchAvailabilitesByUserID = async() => {
        const url = `http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/Availability/AvailabilitybyUserId?userId=${userID}`;
        const headers = {'Authorization': `Bearer ${jwtToken}` };
        const response = await axios.get(url);
        setUserAvailabilityIds(response.data);
    }

    const addOrUpdateAvailability = async(day, dayOfWeek, amountOfFormEntries) => {
        for (let i = 0; i < day.length; i++) {
            const element = day[i];
            const url = `http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/Availability/RemoveUserAvailabilityByTime?userId=${userID}&startTime=${element.startTime}&endTime=${element.endTime}&dayOfWeek=${dayOfWeek}`
            const headers = {'Authorization': `Bearer ${jwtToken}` };
            const response = await axios.post(url);
        }
        for (let i = 0; i < amountOfFormEntries.length; i++) {
            const element = amountOfFormEntries[i];
            const url = `http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/Availability/AddUserAvailabilityByTime?userId=${userID}&startTime=${element.startTime}&endTime=${element.endTime}&dayOfWeek=${dayOfWeek}`;
            const headers = {'Authorization': `Bearer ${jwtToken}` };
            const response = await axios.post(url);
        }
    }

      const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(25, 'Too Long!')
          .required('Required Field'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(25, 'Too Long!')
          .required('Required Field'),
        email: Yup.string().email('Invalid email').required('Required Field'),
        phoneNumber: Yup.string()
          .min(10, 'Too Short! Please enter a valid 10 digit phone number.')
          .max(12, 'Too Long! Please enter a valid 10 digit phone number.')
          .required('Required Field'),  
    });

    const AvailabilitesSchema = Yup.object().shape({  
        mondayAvailabilities: Yup.array()
        .of(
            Yup.object().shape({
                startTime: Yup.string().required("Enter a time or delete this availability"),
                endTime: Yup.string().required("Enter a time or delete this availability"),
            })
        ),
        tuesdayAvailabilities: Yup.array()
        .of(
            Yup.object({
                startTime: Yup.string().required("Enter a time or delete this availability"),
                endTime: Yup.string().required("Enter a time or delete this availability"),
            })
        ),
        wednesdayAvailabilities: Yup.array()
        .of(
            Yup.object({
                startTime: Yup.string().required("Enter a time or delete this availability"),
                endTime: Yup.string().required("Enter a time or delete this availability"),
            })
        ),
        thursdayAvailabilities: Yup.array()
        .of(
            Yup.object({
                startTime: Yup.string().required("Enter a time or delete this availability"),
                endTime: Yup.string().required("Enter a time or delete this availability"),
            })
        ),
        fridayAvailabilities: Yup.array()
        .of(
            Yup.object({
                startTime: Yup.string().required("Enter a time or delete this availability"),
                endTime: Yup.string().required("Enter a time or delete this availability"),
            })
        ),  
    });

    const setTimes = (value) => {
        const index = timeOptions.findIndex(x => x.name === value);
        return timeOptions.slice(index + 1);
    }

    const convertToDateTime = (time) => {
        let hours = parseInt(time.substr(0, 2));
    if(time.indexOf('am') != -1 && hours == 12) {
        time = time.replace('12', '0');
    }
    if(time.indexOf('pm')  != -1 && hours < 12) {
        time = time.replace(hours, (hours + 12));
    }
    let militaryTime = time.replace(/(am|pm)/, '');
    if ([...militaryTime].length < 5) {
        return `1900-01-01T0${militaryTime}:00`;
    } else { return `1900-01-01T${militaryTime}:00`}
    }

    const convertDateTimeToTime = (time) => {
        const minutesSubStr = parseInt(time.substr(14, 15));
        let hoursSubStr = parseInt(time.substr(11, 12))
        if (hoursSubStr > 12) {
            hoursSubStr -= 12
            if (minutesSubStr === 0) {
                return `${hoursSubStr}:${minutesSubStr}0pm`;
            }
            return `${hoursSubStr}:${minutesSubStr}pm`;
        }
        if (hoursSubStr === 12) {
            if (minutesSubStr === 0) {
                return `${hoursSubStr}:${minutesSubStr}0pm`;
            }
            return `${hoursSubStr}:${minutesSubStr}pm`;
        }
        if (minutesSubStr === 0) {
            return `${hoursSubStr}:${minutesSubStr}0am`;
        }
        return `${hoursSubStr}:${minutesSubStr}am`;
    }

    return(
        
            
            <div className='profilePage'>
                <div className='header'>
                    <div className='headerText'>
                        Profile
                    </div>
                    <div className='headerSubtext'>
                        All fields are required.
                    </div>
                    <div style = {{padding: "0px", borderTop: '2px solid', borderColor: DefaultTheme.palette.grayPalette.gray400, height: '2px', width: '100%'}}></div>   
                </div>
                <div className='forms'>
                <Formik initialValues={{
                    firstName: user.attributes.given_name,
                    lastName: user.attributes.family_name,
                    email: user.attributes.email,
                    phoneNumber: "",
                    graduationDate: "",
                    designStudio: "",
                    region: "",
                    practice: "",
                    manager: '',
                    timeZone: "",
                    level: "",
                }} 
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    if (userID === 0) {
                        const user = {
                            email: values.email,
                            password: "11111",
                            firstName: values.firstName,
                            middleName: "",
                            lastName: values.lastName,
                            phoneNumber: values.phoneNumber,
                            graduated: graduate,
                            graduatedDate: values.graduationDate,
                            roleID: values.level,
                            id: 0,
                            designStudiosId: values.designStudio,
                            awsId: null
                        }
                        const url = 'http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/Users/Add';
                        const headers = {'Authorization': `Bearer ${jwtToken}` };
                        const response = axios.post(url, user)
                        .then(function (response) {
                        })
                        .catch(err => {
                    })   
                    } else {
                        const user = {
                            email: values.email,
                            password: "11111",
                            firstName: values.firstName,
                            middleName: "",
                            lastName: values.lastName,
                            phoneNumber: values.phoneNumber,
                            graduated: graduate,
                            graduatedDate: values.graduationDate,
                            roleID: values.level,
                            id: userID,
                            designStudiosId: values.designStudio,
                            awsId: null
                        }

                        const url = 'http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/Users/Update';
                        const headers = {'Authorization': `Bearer ${jwtToken}` };
                        const response = axios.post(url, user)
                        .then(function (response) {
                        })
                        .catch(err => {
                    })   
                    }
                    
                }}>
                { props => (
                <Form>
                    <div className='body'>
                        <div className='userSection'>
                            <div className='infoSection'>
                                <div className='sectionHeader'>
                                    Identifying Information
                                </div>
                                <div className='idRow'>
                                    <div className='inputContainer'>
                                        <div className='inputSubtext'>FIRST NAME</div>
                                        <InputComponent placeholder = {"First Name"} helperText={props.touched.firstName && props.errors.firstName ? props.errors.firstName : null} error={props.touched.firstName && props.errors.firstName ? true : false} value={props.values.firstName} onChange={props.handleChange} onBlur={props.handleBlur} id="firstName" name="firstName"/>
                                    </div>
                                    <div className='inputContainer'>
                                        <div className='inputSubtext'>LAST NAME</div>
                                        <InputComponent placeholder = {"Last Name"} helperText={props.touched.lastName && props.errors.lastName ? props.errors.lastName : null} error={props.touched.lastName && props.errors.lastName ? true : false} value={props.values.lastName} onChange={props.handleChange} onBlur={props.handleBlur} id="lastName" name="lastName"/>
                                    </div>
                                </div>
                                <div className='idRow'>
                                    <div className='inputContainer'>
                                    <div className='inputSubtext'>EMAIL ADDRESS</div>
                                        <InputComponent placeholder = {"Email"} value={props.values.email} id="email" name="email" disabled={true}/>
                                    </div>
                                    <div className='inputContainer'>
                                    <div className='inputSubtext'>PHONE NUMBER</div>
                                        <InputComponent placeholder = {'Phone Number'} helperText={props.touched.phoneNumber && props.errors.phoneNumber ? props.errors.phoneNumber : null} error={props.touched.phoneNumber && props.errors.phoneNumber ? true : false} value={props.values.phoneNumber} onChange={props.handleChange} onBlur={props.handleBlur} id="phoneNumber" name="phoneNumber"/>
                                    </div>
                                </div>
                            </div>
                            <div className='infoSection'>
                                <div className='sectionHeader'>
                                    Student Information
                                </div>
                                <div className='chipSubtext'>
                                    GRADUATE?
                                </div>
                                <div className='studentRow'>
                                    <div className='chipsDiv'>
                                        <div className='yesChip' onClick={() => {setGraduate(!graduate)}}>
                                        <CustomChip label = {'Yes'} selected={graduate ? true : false}></CustomChip>
                                        </div>
                                        <div className='noChip' onClick={() => {setGraduate(!graduate)}}>
                                        <CustomChip label = {'No'} selected={graduate ? false : true} onClick={() => {setGraduate(!graduate)}}/>
                                        </div>
                                    </div >
                                    <div className='inputContainer' style={{display: "flex"}}>
                                        <div className='dateSubtext'>GRADUATION DATE</div>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker sx = {{backgroundColor: 'white', width: "328px", height: '42px'}} value={props.values.graduationDate} onChange={(value) => {props.setFieldValue("graduationDate", value, true)}} id="gradDate" name="gradDate" disableFuture={graduate ? true : false} disablePast={graduate ? false : true}/>
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </div>
                            <div className='infoSection'>
                                <div className='sectionHeader'>
                                    Internal Profile
                                </div>
                                <div className='idRow'>
                                    <div className='inputContainer'>
                                        <div className='inputSubtext'>DESIGN STUDIO</div>
                                        <Dropdown options={studioOptions} value={props.values.designStudio} onChange={props.handleChange} onBlur={props.handleBlur} id="designStudio" name="designStudio" variant="sendID"></Dropdown>
                                    </div>
                                    <div className='inputContainer'>
                                        <div className='inputSubtext'>REGION</div>
                                        <Dropdown options={regionOptions} value={props.values.region} onChange={props.handleChange} onBlur={props.handleBlur} id="region" name="region"></Dropdown>
                                    </div>
                                </div>
                                <div className='idRow'>
                                    <div className='inputContainer'>
                                        <div className='inputSubtext'>PRACTICE</div>
                                        <Dropdown options={practiceAreas} value={props.values.practice} onChange={props.handleChange} onBlur={props.handleBlur} id="practice" name="practice"></Dropdown>
                                    </div>
                                    <div className='inputContainer'>
                                        <div className='inputSubtext'>MANAGER</div>
                                        <Dropdown options={managerOptions} value={props.values.manager} onChange={props.handleChange} onBlur={props.handleBlur} id="manager" name="manager"></Dropdown>
                                    </div>
                                </div>
                                <div className='idRow'>
                                    <div className='inputContainer'>
                                        <div className='inputSubtext'>TIME ZONE</div>
                                        <Dropdown options={timeZones} value={props.values.timeZone} onChange={props.handleChange} onBlur={props.handleBlur} id="timeZone" name="timeZone"></Dropdown>
                                    </div>
                                    <div className='inputContainer'>
                                        <div className='inputSubtext'>LEVEL</div>
                                        <Dropdown options={levelOptions} value={props.values.level} onChange={(e) => {props.setFieldValue("level", e.target.value)}} onBlur={props.handleBlur} id="level" name="level" variant="sendID"></Dropdown>
                                    </div>
                                </div>
                            </div>
                            <Button style ={{color: 'red', backgroundColor: "white" ,marginLeft: "32px", marginTop: "30px", border: "2px solid red", borderRadius: "10px", width: "140px", display: `${props.initialValues == props.values ? "none" : "inline-flex"}`}} onClick={() => props.resetForm()}>Cancel</Button>
                            <Button style ={{color: 'white', backgroundColor: DefaultTheme.palette.core.coreNavy ,marginLeft: "32px", marginTop: "30px", width: "140px", borderRadius: "10px", height: '40.5px', display: `${props.initialValues == props.values ? "none" : "inline-flex"}`}} type="submit">Save Changes</Button>
                            <Button style ={{color: 'white', backgroundColor: DefaultTheme.palette.core.coreNavy ,marginLeft: "32px", marginTop: "30px", display: "none"}} type="submit">Add User</Button>
                        </div> 
                        </div>
                    </Form>
                    )}
                </Formik>
                <Formik enableReinitialize={true} initialValues={{
                    mondayAvailabilities:  condensedMondayAvailabilities,
                    tuesdayAvailabilities: condensedTuesdayAvailabilities,
                    wednesdayAvailabilities: condensedWednesdayAvailabilities,
                    thursdayAvailabilities: condensedThursdayAvailabilities,
                    fridayAvailabilities: condensedFridayAvailabilities,
                }} 
                validationSchema={AvailabilitesSchema}
                onSubmit={(values, actions) => {
                    addOrUpdateAvailability(condensedMondayAvailabilities, 1, values.mondayAvailabilities);                    
                    addOrUpdateAvailability(condensedTuesdayAvailabilities, 2, values.tuesdayAvailabilities);
                    addOrUpdateAvailability(condensedWednesdayAvailabilities, 3, values.wednesdayAvailabilities);
                    addOrUpdateAvailability(condensedThursdayAvailabilities, 4, values.thursdayAvailabilities);
                    addOrUpdateAvailability(condensedFridayAvailabilities, 5, values.fridayAvailabilities);
                }}>
                    { props => (
                <Form>
                        <div className='availabilitySection'>
                            <div className='infoSection'>
                                <div className='sectionHeader'>My Availability</div>
                                <FieldArray name='mondayAvailabilities' render={arrayHelpers => (
                                    <>
                                    <div className='daySection'>
                                        <div className='dayText'>Monday</div>
                                        <button className='addRow' type="button" onClick={() => arrayHelpers.push({startTime: "", endTime: ""})}>+</button>
                                    </div>
                                            {
                                                props.values.mondayAvailabilities.map((availability, index) => {
                                                    return(
                                                        <div className='dropdownRow' key={index}>
                                                        <Dropdown options={index > 0 ? setTimes(props.values.mondayAvailabilities[index - 1].endTime) : timeOptions} size={"small"} name={`mondayAvailabilities[${index}].startTime`} id={`mondayAvailabilities[${index}].startTime`} onChange={(e) => {props.setFieldValue(`mondayAvailabilities[${index}].startTime`, e.target.value)}} value={props.values.mondayAvailabilities[index].startTime} onBlur={props.handleBlur} helperText={props.touched.mondayAvailabilities && props.errors.mondayAvailabilities && index === 0 ? "Please complete all fields" : null}></Dropdown>
                                                        <span className='TO'>TO</span>
                                                        <Dropdown options={props.values.mondayAvailabilities[index].startTime !== "" ? setTimes(props.values.mondayAvailabilities[index].startTime) : timeOptions} size={"small"} name={`mondayAvailabilities[${index}].endTime`} id={`props.values.mondayAvailabilities[${index}].endTime`} onChange={(e) => {props.setFieldValue(`mondayAvailabilities[${index}].endTime`, e.target.value)}} value={props.values.mondayAvailabilities[index].endTime} onBlur={props.handleBlur}></Dropdown>
                                                        <button className='deleteRow' type="button" onClick={() => arrayHelpers.remove(index)}><DeleteIcon sx={{color: "red"}}></DeleteIcon></button>
                                                        </div>
                                                        )
                                                    })
                                                }
                                    </>
                                        )
                                    }
                                >
                                </FieldArray>
                                <FieldArray name='tuesdayAvailabilities' render={arrayHelpers => (
                                    <>
                                    <div className='daySection'>
                                        <div className='dayText'>Tuesday</div>
                                        <button className='addRow' type="button" onClick={() => arrayHelpers.push({startTime: "", endTime: ""})}>+</button>
                                    </div>
                                            {
                                                props.values.tuesdayAvailabilities.map((availability, index) => {
                                                    return(
                                                        <div className='dropdownRow' key={index}>
                                                        <Dropdown options={index > 0 ? setTimes(props.values.tuesdayAvailabilities[index - 1].endTime) : timeOptions} size={"small"} name={`tuesdayAvailabilities[${index}].startTime`} id={`tuesdayAvailabilities[${index}].startTime`} onChange={(e) => {props.setFieldValue(`tuesdayAvailabilities[${index}].startTime`, e.target.value)}} value={props.values.tuesdayAvailabilities[index].startTime} onBlur={props.handleBlur} helperText={props.touched.tuesdayAvailabilities && props.errors.tuesdayAvailabilities && index === 0 ? "Please complete all fields" : null}></Dropdown>
                                                        <span className='TO'>TO</span>
                                                        <Dropdown options={props.values.tuesdayAvailabilities[index].startTime !== "" ? setTimes(props.values.tuesdayAvailabilities[index].startTime) : timeOptions} size={"small"} name={`tuesdayAvailabilities[${index}].endTime`} id={`tuesdayAvailabilities[${index}].endTime`} onChange={(e) => {props.setFieldValue(`tuesdayAvailabilities[${index}].endTime`, e.target.value)}} value={props.values.tuesdayAvailabilities[index].endTime} onBlur={props.handleBlur}></Dropdown>
                                                        <button className='deleteRow' type="button" onClick={() => arrayHelpers.remove(index)}><DeleteIcon sx={{color: "red"}}></DeleteIcon></button>
                                                        </div>
                                                        )
                                                    })
                                                }
                                    </>
                                        )
                                    }
                                >
                                </FieldArray>
                                <FieldArray name='wednesdayAvailabilities' render={arrayHelpers => (
                                    <>
                                    <div className='daySection'>
                                        <div className='dayText'>Wednesday</div>
                                        <button className='addRow' type="button" onClick={() => arrayHelpers.push({startTime: "", endTime: ""})}>+</button>
                                    </div>
                                            {
                                                props.values.wednesdayAvailabilities.map((availability, index) => {
                                                    return(
                                                        <div className='dropdownRow' key={index}>
                                                        <Dropdown options={index > 0 ? setTimes(props.values.wednesdayAvailabilities[index - 1].endTime) : timeOptions} size={"small"} name={`wednesdayAvailabilities[${index}].startTime`} id={`wednesdayAvailabilities[${index}].startTime`} onChange={(e) => {props.setFieldValue(`wednesdayAvailabilities[${index}].startTime`, e.target.value)}} value={props.values.wednesdayAvailabilities[index].startTime} onBlur={props.handleBlur} helperText={props.touched.wednesdayAvailabilities && props.errors.wednesdayAvailabilities && index === 0 ? "Please complete all fields" : null}></Dropdown>
                                                        <span className='TO'>TO</span>
                                                        <Dropdown options={props.values.wednesdayAvailabilities[index].startTime !== "" ? setTimes(props.values.wednesdayAvailabilities[index].startTime) : timeOptions} size={"small"} name={`wednesdayAvailabilities[${index}].endTime`} id={`wednesdayAvailabilities[${index}].endTime`} onChange={(e) => {props.setFieldValue(`wednesdayAvailabilities[${index}].endTime`, e.target.value)}} value={props.values.wednesdayAvailabilities[index].endTime} onBlur={props.handleBlur}></Dropdown>
                                                        <button className='deleteRow' type="button" onClick={() => arrayHelpers.remove(index)}><DeleteIcon sx={{color: "red"}}></DeleteIcon></button>
                                                        </div>
                                                        )
                                                    })
                                                }
                                    </>
                                        )
                                    }
                                >
                                </FieldArray>
                                <FieldArray name='thursdayAvailabilities' render={arrayHelpers => (
                                    <>
                                    <div className='daySection'>
                                        <div className='dayText'>Thursday</div>
                                        <button className='addRow' type="button" onClick={() => arrayHelpers.push({startTime: "", endTime: ""})}>+</button>
                                    </div>
                                            {
                                                props.values.thursdayAvailabilities.map((availability, index) => {
                                                    return(
                                                        <div className='dropdownRow' key={index}>
                                                        <Dropdown options={index > 0 ? setTimes(props.values.thursdayAvailabilities[index - 1].endTime) : timeOptions} size={"small"} name={`thursdayAvailabilities[${index}].startTime`} id={`thursdayAvailabilities[${index}].startTime`} onChange={(e) => {props.setFieldValue(`thursdayAvailabilities[${index}].startTime`, e.target.value)}} value={props.values.thursdayAvailabilities[index].startTime} onBlur={props.handleBlur} helperText={props.touched.thursdayAvailabilities && props.errors.thursdayAvailabilities && index === 0 ? "Please complete all fields" : null}></Dropdown>
                                                        <span className='TO'>TO</span>
                                                        <Dropdown options={props.values.thursdayAvailabilities[index].startTime !== "" ? setTimes(props.values.thursdayAvailabilities[index].startTime) : timeOptions} size={"small"} name={`thursdayAvailabilities[${index}].endTime`} id={`thursdayAvailabilities[${index}].endTime`} onChange={(e) => {props.setFieldValue(`thursdayAvailabilities[${index}].endTime`, e.target.value)}} value={props.values.thursdayAvailabilities[index].endTime} onBlur={props.handleBlur}></Dropdown>
                                                        <button className='deleteRow' type="button" onClick={() => arrayHelpers.remove(index)}><DeleteIcon sx={{color: "red"}}></DeleteIcon></button>
                                                        </div>
                                                        )
                                                    })
                                                }
                                    </>
                                        )
                                    }
                                >
                                </FieldArray>
                                <FieldArray name='fridayAvailabilities' render={arrayHelpers => (
                                    <>
                                    <div className='daySection'>
                                        <div className='dayText'>Friday</div>
                                        <button className='addRow' type="button" onClick={() => arrayHelpers.push({startTime: "", endTime: ""})}>+</button>
                                    </div>
                                            {
                                                props.values.fridayAvailabilities.map((availability, index) => {
                                                    return(
                                                        <div className='dropdownRow' key={index}>
                                                        <Dropdown options={index > 0 ? setTimes(props.values.fridayAvailabilities[index - 1].endTime) : timeOptions} size={"small"} name={`fridayAvailabilities[${index}].startTime`} id={`fridayAvailabilities[${index}].startTime`} onChange={(e) => {props.setFieldValue(`fridayAvailabilities[${index}].startTime`, e.target.value)}} value={props.values.fridayAvailabilities[index].startTime} onBlur={props.handleBlur} helperText={props.touched.fridayAvailabilities && props.errors.fridayAvailabilities && index === 0 ? "Please complete all fields" : null}></Dropdown>
                                                        <span className='TO'>TO</span>
                                                        <Dropdown options={props.values.fridayAvailabilities[index].startTime !== "" ? setTimes(props.values.fridayAvailabilities[index].startTime) : timeOptions} size={"small"} name={`fridayAvailabilities[${index}].endTime`} id={`fridayAvailabilities[${index}].endTime`} onChange={(e) => {props.setFieldValue(`fridayAvailabilities[${index}].endTime`, e.target.value)}} value={props.values.fridayAvailabilities[index].endTime} onBlur={props.handleBlur}></Dropdown>
                                                        <button className='deleteRow' type="button" onClick={() => arrayHelpers.remove(index)}><DeleteIcon sx={{color: "red"}}></DeleteIcon></button>
                                                        </div>
                                                        )
                                                    })
                                                }
                                    </>
                                        )
                                    }
                                >
                                    </FieldArray>
                                    <div style={{display: "flex", paddingLeft: "12px", gap: "32px"}}>
                                    <Button style ={{color: 'red', backgroundColor: "white", marginTop: "30px", border: "2px solid red", borderRadius: "10px", width: "140px", display: `${props.initialValues == props.values ? "none" : "inline-flex"}`}} onClick={() => props.resetForm()}>Cancel</Button>
                                    <Button style ={{color: 'white', backgroundColor: DefaultTheme.palette.core.coreNavy, marginTop: "30px", width: "140px", borderRadius: "10px", height: '40.5px', display: `${props.initialValues == props.values ? "none" : "inline-flex"}`}} type="submit">Save Changes</Button>
                                    </div>
                                </div>
                            </div>
                    </Form>
                    )}
                </Formik>
                </div>
            </div> 

    );
};

export default ProfilePage;