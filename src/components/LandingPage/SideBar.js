import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


    
    

    const SideBar = styled('div')({
        backgroundColor: DefaultTheme.palette.core.coreNavy,
        width: '35%',
        minHeight: '100vh',    
    });

    export default function SideBarExport({children}){
        return(<SideBar>{children}</SideBar>)
    }