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




const LandingPage = ({children}) => {
    return(
        <>
                <BackgroundImage>                   
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