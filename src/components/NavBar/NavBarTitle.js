import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


    
    

    const NavBarTitle = styled('div')({
        color: DefaultTheme.palette.core.coreWhite,
        fontWeight: 'bold',
        fontSize: '1.5rem',
        paddingLeft: '45px',
        paddingBottom: '100px',   
    });

    export default function TitleExport({children}){
        return(<NavBarTitle>{children}</NavBarTitle>)
    }