import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';



const timeZones = [{name: "Eastern (EST)", id: "1"}, {name: "Central (CST)", id: "2"}, {name: "Mountain (MST)", id: "3"}, {name: "Pacific (PST)", id: "4"}, {name: "Alaska (AKST)", id: "5"}, {name: "Hawaii (HAST)", id: "6"}];
const practiceAreas = [{name: ".Net", id: "1"}, {name: "Backend", id: "2"}, {name: "Business Analyst", id: "3"}, {name: "Java", id: "4"}, {name: "Product", id: "5"}, {name: "QA", id: "6"}, {name: "Frontend", id: "7"}];
const managerOptions = [{name: "Lane Thompson", id: "Test 1"}, {name: "Scott Holt", id: "Test 2"}, {name: "Jason Van Beemen", id: "Test 3"}, {name: "Dustan Vodvarka", id: "Test 4"}, {name: "Josh Herriman", id: "Test 5"}];
const levelOptions = [{name: 'Junior Associate', id: 1}, {name: 'Manager', id: 2}];
const timeOptions = [
    {
        name: "6:00am",
        id: "1"
    },
    {
        name: "6:30am",
        id: "2"
    },
    {
        name: "7:00am",
        id: "3"
    },
    {
        name: "7:30am",
        id: "4"
    },
    {
        name: "8:00am",
        id: "5"
    },
    {
        name: "8:30am",
        id: "6"
    },
    {
        name: "9:00am",
        id: "7"
    },
    {
        name: "9:30am",
        id: "8"
    },
    {
        name: "10:00am",
        id: "9"
    },
    {
        name: "10:30am",
        id: "10"
    },
    {
        name: "11:00am",
        id: "11"
    },
    {
        name: "11:30am",
        id: "12"
    },
    {
        name: "12:00pm",
        id: "13"
    },
    {
        name: "12:30pm",
        id: "14"
    },
    {
        name: "1:00pm",
        id: "15"
    },
    {
        name: "1:30pm",
        id: "16"
    },
    {
        name: "2:00pm",
        id: "17"
    },
    {
        name: "2:30pm",
        id: "18"
    },
    {
        name: "3:00pm",
        id: "19"
    },
    {
        name: "3:30pm",
        id: "20"
    },
    {
        name: "4:00pm",
        id: "21"
    },
    {
        name: "4:30pm",
        id: "22"
    },
    {
        name: "5:00pm",
        id: "23"
    },
    {
        name: "5:30pm",
        id: "24"
    },
    {
        name: "6:00pm",
        id: "25"
    },
]

const DataContext = createContext({
    studioOptions: [],
    timeZones: timeZones,
    practiceAreas: practiceAreas,
    managerOptions: managerOptions,
    regionOptions: [],
    levelOptions: levelOptions,
    timeOptions: timeOptions,
    availabilitySummary: [],
    userList: [],
    userID: 0
});

const DataProvider = ({ children }) => {
    const {user} = useAuthenticator((context) => [context.user]);
    const [jwt, setJwt] = useState("");
    useEffect(() => {
        if (user) {
            setJwt(user.signInUserSession.accessToken.jwtToken); 
        }
      }, [user]);

const fetchRegions = async () => {
    const url = 'http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/Region';
    const headers = {'Authorization': `Bearer ${jwt}` };
    const response = await axios.get(url, {mode: "no-cors"});
    setRegionOptions(response.data)
}   

const fetchStudios = async () => {
    const url = 'http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/DesignStudio';
    const headers = {'Authorization': `Bearer ${jwt}` };
    const response = await axios.get(url);
    setStudioOptions(response.data)
} 

const fetchAvailabilitySummary = async () => {
    const url = 'http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/Availability/AvailabilitySummary';
    const headers = {'Authorization': `Bearer ${jwt}` };
    const response = await axios.get(url);
    setAvailabilitySummary(response.data)
} 

const fetchUsers = async () => {
    const url = 'http://ec2-100-25-38-105.compute-1.amazonaws.com/jascheduler/dev/api/Users';
    const headers = {'Authorization': `Bearer ${jwt}` };
    const response = await axios.get(url);
    setUserList(response.data)
} 

 useEffect(()=>{
        (async()=>{
        if(user){
            await fetchRegions();
            await fetchStudios();
            await fetchAvailabilitySummary();
            await fetchUsers();

        }

        })()
    },[jwt])

    const [regionOptions, setRegionOptions] = useState([]);
    const [studioOptions, setStudioOptions] = useState([]);
    const [availabilitySummary, setAvailabilitySummary] = useState([]);
    const [userList, setUserList] = useState([]);
    

    return (
        <DataContext.Provider value={{studioOptions, timeZones, practiceAreas, managerOptions, regionOptions, levelOptions, timeOptions, availabilitySummary, userList}}>{children}</DataContext.Provider>
    )
};

export { DataContext, DataProvider };