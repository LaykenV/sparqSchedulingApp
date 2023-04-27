import React, { useContext, useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import { TableComponent } from '../components/TableComponent';
import { DefaultTheme } from '../themes/DefaultTheme';
import "./dashboard.css";
import { DataContext } from '../dataContext';
import { DevNote } from '../components/DevNote';



const Dashboard = () => {
    const { timeZones, availabilitySummary } = useContext(DataContext);
    const [timeZone, setTimeZone] = useState(timeZones[1].name);

    return(
        <div className='Dashboard'>
            <DevNote page={"dashboard"} header={"Developer Notes"} message={"On this table, we pull the availabilities for each day from each user in the database. It displays a number which is the amount of people available for that time slot. There is also functionality that if 60% or more of users are available at that time then the time slot will be highlighted green."}></DevNote>
            <div className='dashboardHeaderText'>Team Availability</div>
            <div className='timeZone'>
                <div className='dropdownText'>Time Zone:</div>
                <Dropdown options={timeZones} size="xsmall" value={timeZone} setValue={setTimeZone}></Dropdown>
            </div>
            <TableComponent data={availabilitySummary} timeZone={timeZone}></TableComponent>
        </div>
    )
}

export {Dashboard};