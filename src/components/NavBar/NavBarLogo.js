import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';
import logo from '../../images/logo2.png'


    
    

    const NavBarLogo = styled('img')({
        padding: '45px',
        paddingBottom: '22.5px',
        width: '90%'    
    });

    export default function LogoExport({children}){
        return(<NavBarLogo src = {logo}>{children}</NavBarLogo>)
    }