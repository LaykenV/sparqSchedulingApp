import React from 'react';
import Checkbox from '@mui/material/Checkbox'
import { styled, useTheme, sx } from '@mui/system';
import {DefaultTheme} from '../themes/DefaultTheme';
import FormControlLabel from '@mui/material/FormControlLabel';


    
    

const StyledCheckbox = styled(Checkbox)({
    width: '16px',
    height: '16px',
    radius: '4px',
    marginRight: '12px',
    verticalAlign: 'middle',
    color: DefaultTheme.palette.grayPalette.gray400,
    backgroundColor: DefaultTheme.palette.grayPalette.gray100,

    '&:hover': {
        color: DefaultTheme.palette.yellowPalette.yellow200,
        backgroundColor: DefaultTheme.palette.grayPalette.gray100    
    },

    '&:checked': {
        color: DefaultTheme.palette.primary.primary400,
        backgroundColor: DefaultTheme.palette.primary.primary400      
    },

    '&:disabled' : {
        color: 'grey',
        backgroundColor: 'grey'
    }
    
    
    
    
    
})

export default function CustomCheckbox({disabled, children}){
    if(disabled){
        return(<FormControlLabel sx = {{width: '110px', 
                                        height: '20px',  
                                        color: DefaultTheme.palette.grayPalette.gray800}} 
                                        control = {<StyledCheckbox disabled></StyledCheckbox>} 
                                        label = {'Label Text'}></FormControlLabel>)
    }
    else{
    return (<FormControlLabel sx = {{width: '110px', 
                                    height: '20px',  
                                    color: DefaultTheme.palette.grayPalette.gray800}} 
                                    control = {<StyledCheckbox></StyledCheckbox>} 
                                    label = {children}></FormControlLabel>)
    }
}