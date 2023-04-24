import React, { useContext, useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import { TableComponent } from '../components/TableComponent';
import { DefaultTheme } from '../themes/DefaultTheme';
import "./dashboard.css";
import { DataContext } from '../dataContext';



const Dashboard = () => {
    const { timeZones, availabilitySummary } = useContext(DataContext);
    const [timeZone, setTimeZone] = useState(timeZones[1].name);

    return(
        <div className='Dashboard'>
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