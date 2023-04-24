import CustomCheckbox from "../components/CustomCheckbox";
import React from "react";

export default {
    title: "Components/CustomCheckbox",
    component: CustomCheckbox,
};

const Template = args => <CustomCheckbox {...args} />

export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
    children: 'Label Text',
    disabled: true,
    
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
    children: 'Label Text',
    disabled: false
}