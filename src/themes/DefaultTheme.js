import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const DefaultTheme = createTheme({
    palette: {
        core: {
            coreNavy: '#111243',
            coreBlue: '#7E94CB',
            coreTeal: '#00868B',
            coreSeafoam: '#7FC2B2',
            coreBlack: '#0A0D14',
            coreWhite: '#FFFFFF',
            lightGray: '#BEC1C8',
            mediumGray: '#8F939B',
            darkGray: '#1D1E21', 
        },
        
        primary: {
            main: '#0066AD',
            primary100: '#E0F2FF',
            primary200: '#A2C6DF',
            primary300: '#48A2E1',
            primary400: '#0066AD',
            primary500: '#00487A',
            primary600: '#002B49',
        },
        secondary: {
            main: '#00B167',
        },
        grayPalette: {
            main: 'gray',
            gray100: '#F8F9FA',
            gray200: '#F0F1F3',
            gray300: '#E1E3E8',
            gray400: '#C8D0D5',
            gray500: '#949AA4',
            gray600: '#606774',
            gray700: '#424B57',
            gray800: '#323946',
            gray900: '#1E242F',
        },
        greenPalette: {
            green100: '#E0FFEE',
            green200: '#00B167',
            green300: '#007141',
            green400: '#005531',
        },
        yellowPalette: {
            yellow100: '#FFF8EB',
            yellow200: '#F1B93F',
            yellow300: '#C77125',
            yellow400: '#7E3D1A',    
        },
        redPalette: {
            red100: '#FFE5EA',
            red200: '#E4002B',
            red300: '#AC0020',
            red400: '#770016',
        }
    }


})