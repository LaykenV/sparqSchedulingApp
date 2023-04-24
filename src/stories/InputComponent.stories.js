import InputComponent from "../components/InputComponent"
import React from "react";


export default {
    title: "Components/InputComponent",
    component: InputComponent,
}

const Template = args => <InputComponent {...args} />

export const EmptyInput = Template.bind({});
EmptyInput.args = {
    disabled: false,
    error: false,
    placeholder: "Empty Input"
}

export const DisabledInput = Template.bind({});
DisabledInput.args = {
    disabled: true,
    error: false,
    placeholder: "Disabled"
}

export const ErrorInput = Template.bind({});
ErrorInput.args = {
    disabled: false,
    error: true,
    helperText: "Uh-Oh! There is an error"
}