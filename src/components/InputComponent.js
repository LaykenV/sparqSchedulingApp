import { styled, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PropTypes } from "prop-types";


const EmptyInput = styled(TextField)({
  //width: "309px",
  width: "348px",
  padding: "12px",
  "> div": {border: "1px #E1E3E8 solid",
            borderRadius: "8px",
            backgroundColor: "#F8F9FA",
            height: "42px",
            "> fieldset": {border: "none"}},
  });

  const DisabledInput = styled(TextField)({
    width: "348px",
    padding: "12px",
    "> label": {top: "6px", left: "6px"},
    "> div": {border: "1px #E1E3E8 solid",
            borderRadius: "8px",
            backgroundColor: "#F8F9FA",
            height: "42px",
            "> fieldset": {border: "none"}},
  })

  const ErrorInput = styled(TextField)({
    width: "348px",
    padding: "12px",
    
    "> div": {border: "1px #E4002B solid",
              borderRadius: "8px",
              backgroundColor: "#FFE5EA",
              height: "42px",
              "> fieldset": {border: "none"},
              "> input": {color: "#E4002B"}},
    "> p": {padding: '0px', margin: 0, postion: 'absolute'}
  })

  function InputComponent({disabled, error, placeholder, helperText, value, onChange, onBlur, id, name}) {
    const [focused, setFocused] = useState(false);
    const [borderColor, setBorderColor] = useState("#E1E3E8");

    const handleClickOutside = (e) => {
      setFocused(false);
      setBorderColor("#E1E3E8")
    }

    useEffect(() => {
        if (focused === true) {
          setBorderColor("#0066AD")
          document.addEventListener("mousedown", handleClickOutside) 
        };
        
      }, [focused]);

      { 
        if (disabled == true) {
          return(
            <DisabledInput disabled={disabled} placeholder={placeholder} onChange={onChange} id={id} name={name} value={value}></DisabledInput>
            )
          }
          if (error == true) {
            return(
              <ErrorInput error={error} autoComplete="off" placeholder={placeholder} helperText={helperText} value={value} onChange={onChange} onBlur={onBlur} name={name} id={id}></ErrorInput>
              )
            }
            return (
              <EmptyInput placeholder={placeholder} autoComplete="off" onClick={(e) => {setFocused(true)}} sx={{"> div": {borderColor: {borderColor}}}} value={value} onChange={onChange} onBlur={onBlur} id={id} name={name}></EmptyInput>
            )
      }
    }

    InputComponent.propTypes = {
      disabled: PropTypes.bool,
      placeholder: PropTypes.string,
      error: PropTypes.bool,
      helperText: PropTypes.string,
      value: PropTypes.string,
      setValue: PropTypes.func,
  }
  
    export default InputComponent;