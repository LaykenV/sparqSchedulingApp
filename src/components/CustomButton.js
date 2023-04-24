import React from 'react';
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/system';
import {DefaultTheme} from '../themes/DefaultTheme';

    
    

    const ButtonOne = styled(Button)({
        backgroundColor: DefaultTheme.palette.primary.primary400,
        color: DefaultTheme.palette.core.coreWhite,
        padding: '10px 20px 10px 20px',

        '&:hover': {
            
            backgroundColor: DefaultTheme.palette.primary.primary500              
        },
        '&:focus': {
            border: '3px solid white',
            outline: '3px solid',
            outlineColor: DefaultTheme.palette.yellowPalette.yellow200

        },
        '&:disabled': {
            backgroundColor: 'grey',
            color: 'white'
        }
    })

    const ButtonTwo = styled(Button)({
        color: DefaultTheme.palette.primary.primary400,
        padding: '10px 20px 10px 20px',
        backgroundColor: 'white',
        border: 'solid 3px #0066AD',
        

        '&:focus': {
            color: DefaultTheme.palette.core.coreWhite,
            backgroundColor: DefaultTheme.palette.primary.primary500,
            borderColor: DefaultTheme.palette.primary.primary500
        },

        '&:focus': {
            color: "white",
            backgroundColor: '#00487A',
            borderColor: '#00487A'
        }
    })

    const ButtonThree = styled(Button)({

        color: DefaultTheme.palette.redPalette.red200,
        
    })

    const ButtonFour = styled(Button)({
        color: DefaultTheme.palette.primary.primary400,
        
    })

export default function CustomButton({variant, disabled, children, onClick}){
    
    if(disabled){
        return (<ButtonOne disabled>{children}</ButtonOne>)
    }
    else if(variant === "two"){
        return (<ButtonTwo onClick = {onClick}>{children}</ButtonTwo>)
    }
    else if(variant === "three"){
        return (<ButtonThree onClick = {onClick}>{children}</ButtonThree>)
    }
    else if(variant === "four"){
        return (<ButtonFour onClick = {onClick}>{children}</ButtonFour>)
    }
    else{
        return (<ButtonOne onClick = {onClick}>{children}</ButtonOne>)
    }
    
}
