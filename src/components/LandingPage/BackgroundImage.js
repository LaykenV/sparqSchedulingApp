import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';
import background from '../../images/background3.png';
import logo from '../../images/logo.png';

    
    

    const BackgroundImage = styled('div')({
        display: "flex",
        backgroundImage: `url('${background}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        minWidth: '100%',
        minHeight: '100%'
    });

    export default function Background({children}){
        return(<BackgroundImage>{children}</BackgroundImage>)
    }