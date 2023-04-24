import React from "react";
import { Chip, styled } from "@mui/material";
import { PropTypes } from "prop-types";
import {DefaultTheme} from '../themes/DefaultTheme';


CustomChip.propTypes = {
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    label: PropTypes.string
};

const DefaultChip = styled(Chip) ({
    minWidth: "66px",
    height: "40px",
    borderRadius: "30px",
    padding: "5px 10px",
    backgroundColor: DefaultTheme.palette.core.coreWhite,
    color: DefaultTheme.palette.core.coreNavy,
    border: "1px solid",
    borderColor: DefaultTheme.palette.core.coreNavy,
    cursor: "pointer",
        "&:hover": {
            backgroundColor: DefaultTheme.palette.core.coreBlue,
            border: "1px solid",
            borderColor: DefaultTheme.palette.core.coreNavy,
        },
        ":&disabled": {
            backgroundColor: DefaultTheme.palette.grayPalette.gray400,
            border: "none",
        }
})


const SelectedChip = styled(Chip) ({
    height: "40px",
    minWidth: "66px",
    borderRadius: "30px",
    padding: "5px 10px",
    gap: "4px",
    backgroundColor: DefaultTheme.palette.core.coreNavy,
    color: DefaultTheme.palette.core.coreWhite,
    border: "1px solid",
    borderColor: DefaultTheme.palette.core.coreNavy,
    cursor: "pointer",

})

function CustomChip({disabled, selected, label}) {
    {
        if (disabled) {
            return(
                <DefaultChip disabled={true} label={label}></DefaultChip>
            )
        }
        if (selected) {
            return(
                <SelectedChip label={label}></SelectedChip>
            )
        }
        return(
            <DefaultChip label={label}></DefaultChip>
        )
    }
}

export {CustomChip};
