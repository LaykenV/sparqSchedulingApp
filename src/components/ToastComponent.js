import React, { useState } from "react";
import { styled } from "@mui/system";
import { PropTypes } from "prop-types";
import { Alert } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { NotificationsNone} from "@mui/icons-material";


const SuccessToast = styled(Alert)({
    width: "350px",
    display: "inline-flex",
    height: "32px",
    borderRadius: "6px",
    padding: "16px",
    gap: "10px",
    backgroundColor: "#FFFFFF",
    color: "#00B167",
    border: "1px #00B167 solid",
    alignItems: "center",
    boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 0.8)",
        "> div:first-of-type": {backgroundColor: "#E0FFEE",
                              borderRadius: "6px",
                              height: "24px",
                              width: "24px",
                              padding: "4px"}
});

const DangerToast = styled(Alert)({
    width: "640px",
    height: "32px",
    borderRadius: "6px",
    padding: "16px",
    gap: "10px",
    backgroundColor: "#FFFFFF",
    color: "#E4002B",
    border: "1px #E4002B solid",
    alignItems: "center",
    boxShadow: "0px 1px 2px 0px rgb(0 0 0 / 0.8)",
        "> div:first-of-type": {
            backgroundColor: "#FFE5EA",
            borderRadius: "6px",
            height: "24px",
            width: "24px",
            padding: "4px",
            "> svg": {color: "#E4002B"}
        }
});

function ToastComponent({state, children}) {
    const [displayState, setDisplayState] = useState("flex");
    {
        if (state === "danger") {
            return(
                <DangerToast onClose={() => {setDisplayState("none")}} icon={<NotificationsNone></NotificationsNone>} sx={{display: displayState}}>{children}</DangerToast>
            )
        };
        return(
            <SuccessToast onClose={() => {setDisplayState("none")}} icon={<CheckIcon></CheckIcon>} sx={{display: displayState}}>{children}</SuccessToast>
        )
    }
}

ToastComponent.propTypes = {
    state: PropTypes.string
}

export {ToastComponent};