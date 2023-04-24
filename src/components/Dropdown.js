import React, {useState, useEffect} from "react";
import { styled } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { PropTypes } from "prop-types";

function Dropdown ({options, value, size, onChange, id, name, onBlur, setValue, variant, helperText}) {

    {
        if (size === "small") {
            return (
            <FormControl sx={{padding:"12px", width: "248px"}}>
                <InputLabel sx={{top: "6px", left: "6px"}}></InputLabel>
                <Select sx={{border: "1px #E1E3E8 solid", height: "42px", borderRadius: "8px", backgroundColor: "#F8F9FA", "> fieldset":{border: "none"}}} value={value} onChange={onChange} onBlur={onBlur} id={id} name={name}>
                    {options.map((option) => {
                        return(
                            <MenuItem value={option.name} key={option.id}>{option.name}</MenuItem>
                        )
                    })}
                </Select>
                <p style={{position: "absolute", marginTop: "-50px", color: "red", marginLeft: "150px", whiteSpace: "nowrap", fontWeight: "bold"}}>{helperText}</p>
            </FormControl>
            )
        }
        if (variant === "sendID") {
            return (
                <FormControl sx={{padding:"12px", width: "348px"}}>
                    <InputLabel sx={{top: "6px", left: "6px"}}></InputLabel>
                    <Select sx={{border: "1px #E1E3E8 solid", height: "42px", borderRadius: "8px", backgroundColor: "#F8F9FA", "> fieldset":{border: "none"}}} value={value} onChange={onChange} onBlur={onBlur} id={id} name={name}>
                        {options.map((option) => {
                            return(
                                <MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            )
        }
        if (size === "xsmall") {
            return (
            <FormControl sx={{padding:"12px", width: "180px"}}>
                <InputLabel sx={{top: "6px", left: "6px"}}></InputLabel>
                <Select sx={{border: "1px #E1E3E8 solid", height: "42px", borderRadius: "25px", backgroundColor: "#F8F9FA", "> fieldset":{border: "none"}}} value={value} onChange={(e) => {setValue(e.target.value)}} onBlur={onBlur} id={id} name={name}>
                    {options.map((option) => {
                        return(
                            <MenuItem value={option.name} key={option.id}>{option.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            )
        }
        return (
            <FormControl sx={{padding:"12px", width: "348px"}}>
                <InputLabel sx={{top: "6px", left: "6px"}}></InputLabel>
                <Select sx={{border: "1px #E1E3E8 solid", height: "42px", borderRadius: "8px", backgroundColor: "#F8F9FA", "> fieldset":{border: "none"}}} value={value} onChange={onChange} onBlur={onBlur} id={id} name={name}>
                    {options.map((option) => {
                        return(
                            <MenuItem value={option.name} key={option.id}>{option.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        )
    }
}


export default Dropdown;