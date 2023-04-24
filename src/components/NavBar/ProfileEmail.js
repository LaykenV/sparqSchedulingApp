import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


    
    

    const ProfileEmail = styled('div')({
        fontWeight: '100',
        fontSize: '12px',
        color: DefaultTheme.palette.core.coreWhite,



    });

    export default function ProfileEmailExport({children}){
        return(<ProfileEmail>{children}</ProfileEmail>)
    }