import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


    
    

    const ProfileName = styled('div')({
        fontWeight: '550',
        color: DefaultTheme.palette.core.coreWhite,



    });

    export default function ProfileNameExport({children}){
        return(<ProfileName>{children}</ProfileName>)
    }