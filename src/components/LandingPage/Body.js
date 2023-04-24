import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


    
    

    const Body = styled('div')({
        color: DefaultTheme.palette.core.coreWhite,
        padding: '90px',
        paddingTop: '45px'   
    });

    export default function BodyExport({children}){
        return(<Body>{children}</Body>)
    }