import React from  'react';
import background from '../images/background.png';
import logo from '../images/logo.png';
import {DefaultTheme} from '../themes/DefaultTheme';
import BackgroundImage from '../components/LandingPage/BackgroundImage';
import SideBar from '../components/LandingPage/SideBar';
import Logo from '../components/LandingPage/Logo';
import Title from '../components/LandingPage/Title';
import Body from '../components/LandingPage/Body';
import LoginContainer from '../components/LandingPage/LoginContainer';
import { DevNote } from '../components/DevNote';




const LandingPage = ({children}) => {
    return(
        <>
                <BackgroundImage>
                    <DevNote message={"Thank you for checking out my application! I built this during an internship with Sparq but unfortunately I was only given access to my front end code for portfolio purposes. There will be Dev Notes on each page to explain the functionality that happens with the full-stack version of the app. Please log in to the app with Email 'tojedic407@larland.com' (Temp email for guest account) and Password 'Password1!'. Thank you and enjoy!"} header={"Developer Notes"} page={"landingPage"}></DevNote>                   
                    <SideBar>
                        <Logo />
                        <Title>JA Availability</Title>
                        <Body>Welcome to the JA Availability application. This will allow users to see how many JA’s are available broken down by time blocks for optimal scheduling.</Body>               
                    </SideBar>
                    
                    <LoginContainer>
                        {children}
                    </LoginContainer>
                </BackgroundImage>
            

            
        </>
    );

};

export default LandingPage;