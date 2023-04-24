import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';
import logo from '../../images/logo2.png'


    
    

    const Logo = styled('img')({
        padding: '90px',
        paddingBottom: '45px',
        width: '90%'    
    });

    export default function LogoExport({children}){
        return(<Logo src = {logo}>{children}</Logo>)
    }