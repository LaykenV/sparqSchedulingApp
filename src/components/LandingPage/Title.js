import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


    
    

    const Title = styled('div')({
        color: DefaultTheme.palette.core.coreWhite,
        fontWeight: 'bold',
        fontSize: '2.5rem',
        paddingLeft: '90px'    
    });

    export default function TitleExport({children}){
        return(<Title>{children}</Title>)
    }