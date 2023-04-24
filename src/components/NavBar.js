import React, {useState, useEffect} from "react";
import { DefaultTheme } from "../themes/DefaultTheme";
import Avatar from '@mui/material/Avatar';
import CustomButton from "./CustomButton";
import NavBarLogo from '../components/NavBar/NavBarLogo';
import NavBarTitle from '../components/NavBar/NavBarTitle';
import NavBarBlock from '../components/NavBar/NavBarBlock';
import ProfileSection from '../components/NavBar/ProfileSection';
import ProfileTextContainer from './NavBar/ProfileTextContainer';
import ProfileName from '../components/NavBar/ProfileName';
import ProfileEmail from '../components/NavBar/ProfileEmail';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator} from '@aws-amplify/ui-react';
import Amplify,  { Auth } from 'aws-amplify';




const NavBar = ({children}) => {
    const navigate = useNavigate();
    const { signOut, user } = useAuthenticator((context) => [context.user]);
    const logOut = () => {
        signOut();
        useNavigate("/");
    }
    
    const [pathname, setPathName] = useState('');
    const [userFullName, setUserFullName] = useState('');
    
    const userInitials = userFullName.split(' ').map(word => word.charAt(0)).join('');                   

    useEffect(() => {
        setPathName(window.location.pathname)

    });
    
    
    
    useEffect(() => {
        setUserFullName(`${user.attributes.given_name} ${user.attributes.family_name}`);
    },[]);
   
    
    const handleClick = (link) => navigate(link);
    
    return(
        <>
        <div style = {{display: 'flex', flexDirection: 'column', width: '256px', gap: '5px', height: "100vh", backgroundColor: DefaultTheme.palette.core.coreNavy, position: "sticky", top: 0}}>
            <NavBarLogo />
            <NavBarTitle>
                JA Availability
            </NavBarTitle>           
            <NavBarBlock selected = {pathname == '/dashboard' ? true: false} onClick = {() => {handleClick("/dashboard")}}>
                <ViewComfyIcon />
                <span style = {{width: '5px'}}/>
                Dashboard
            </NavBarBlock>            
            <NavBarBlock selected = {pathname == '/usermanagement' ? true: false} onClick = {() => {handleClick("/usermanagement")}}>
                <PeopleAltIcon />
                <span style = {{width: '5px'}}/>
                User Management
            </NavBarBlock>            
            <NavBarBlock selected = {pathname == '/profile' ? true: false} onClick = {() => {handleClick("/profile")}}>
                <CalendarMonthIcon />
                <span style = {{width: '5px'}}/>
                Profile
            </NavBarBlock>
            <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', flexGrow: '1'}}>
                <ProfileSection>
                    <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '10px'}}>
                        <Avatar>{userInitials}</Avatar>
                        <ProfileTextContainer>
                            <ProfileName>
                                {user.attributes.given_name} {user.attributes.family_name} 
                            </ProfileName>
                            <ProfileEmail>
                                {user.attributes.email}      
                            </ProfileEmail>
                        </ProfileTextContainer>
                    </div>
                    <CustomButton onClick={signOut} variant={'three'}>Sign Out</CustomButton>   
                </ProfileSection>
            </div>
        </div>


        
        </>
    );
};

export default NavBar