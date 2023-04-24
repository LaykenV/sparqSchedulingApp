import React from "react";
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../../themes/DefaultTheme';


const NavBarBlock = styled('div')({
    width: '256px',
    height: '54px',
    top: '48px',
    color: DefaultTheme.palette.core.coreWhite,
    fontSize: '1.25rem',
    padding: '10px',
    paddingLeft: '30px',
    fontWeight: '550',
    verticalAlign: 'middle',
    alignItems: 'center',
    display: 'flex',
    
    


    '&:hover': {
        color: DefaultTheme.palette.core.coreNavy,
        backgroundColor: DefaultTheme.palette.core.coreWhite,
        cursor: "pointer"
    }
    
        
});

const NavBarBlockClicked = styled('div')({
    width: '256px',
    height: '54px',
    top: '48px',
    backgroundColor: DefaultTheme.palette.core.coreWhite,
    color: DefaultTheme.palette.core.coreNavy,
    fontSize: '1.25rem',
    padding: '10px',
    paddingLeft: '30px',
    fontWeight: '550',
    verticalAlign: 'middle',
    alignItems: 'center',
    display: 'flex',
    
                
});

export default function BlockExport({children, onClick, selected}){
    
    if(selected){
        return(<NavBarBlockClicked onClick = {onClick}>{children}</NavBarBlockClicked>)
    }
    else{
        return(<NavBarBlock onClick = {onClick}>{children}</NavBarBlock>)
    }
}