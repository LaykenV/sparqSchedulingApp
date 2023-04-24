import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


    
    

    const LoginContainer = styled('div')({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1   
    });

    export default function LoginContainerExport({children}){
        return(<LoginContainer>{children}</LoginContainer>)
    }