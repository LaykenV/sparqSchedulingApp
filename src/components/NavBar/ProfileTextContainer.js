import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


    
    

    const ProfileTextContainer = styled('div')({
        display: 'flex',
        flexDirection: 'column',



    });

    export default function ProfileTextContainerExport({children}){
        return(<ProfileTextContainer>{children}</ProfileTextContainer>)
    }