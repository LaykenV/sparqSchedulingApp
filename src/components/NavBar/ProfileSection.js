import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


    
    

    const ProfileSection = styled('div')({
        borderTop: '2px solid', 
        borderColor: DefaultTheme.palette.grayPalette.gray600, 
        width: '256px',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',



    });

    export default function ProfileSectionExport({children}){
        return(<ProfileSection>{children}</ProfileSection>)
    }