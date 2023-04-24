import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { InputAdornment, TextField } from "@mui/material";
import  SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { PropTypes } from "prop-types";

const EmptySearchBar = styled(TextField)({
    width: "309px",
    padding: "12px 16px",
    "> div": {border: "1px #E1E3E8 solid",
            borderRadius: "8px",
            backgroundColor: "#F8F9FA",
            height: "42px",
            "> fieldset": {border: "none"}}
})

const DisabledSearchBar = styled(TextField)({
    width: "325px",
    padding: "12px",
    "> div": {border: "1px #E1E3E8 solid",
            borderRadius: "8px",
            backgroundColor: "#F8F9FA",
            height: "42px",
            "> fieldset": {border: "none"}}
})

function SearchBar({disabled, placeholder, value, setValue}) {
    const [focused, setFocused] = useState(false);
    const [borderColor, setBorderColor] = useState("#E1E3E8");
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
        if (typeof setValue === "function") {
            setValue(localValue);   
        }
    }, [localValue])

    const handleClickOutside = (e) => {
        setFocused(false);
        setBorderColor("#E1E3E8")
      };

      useEffect(() => {
        if (focused === true) {
            setBorderColor("#0066AD");
            document.addEventListener("mousedown", handleClickOutside)
        }
      }, [focused]);

    {
        if (disabled === true) {
            return(
                <DisabledSearchBar placeholder={placeholder} disabled={true} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlinedIcon />
                        </InputAdornment>
                    ) 
                }} variant="outlined">
                </DisabledSearchBar>
            )
        };
            return(
                <EmptySearchBar placeholder={placeholder} onClick={(e) => setFocused(true)} sx={{"> div": {borderColor: {borderColor}}}} value={localValue} onChange={(e) => {setLocalValue(e.target.value)}} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlinedIcon onClick={searchFunction}/>
                        </InputAdornment>
                    )
                }} variant="outlined">
                </EmptySearchBar>
            )
    }
}

SearchBar.propTypes = {
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
}

export default SearchBar;