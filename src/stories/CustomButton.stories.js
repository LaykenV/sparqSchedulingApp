import CustomButton from "../components/CustomButton";
import React from "react";

export default {
    title: "Components/CustomButton",
    component: CustomButton,
};

const Template = args => <CustomButton {...args} />

export const DisabledButton = Template.bind({});
DisabledButton.args = {
    disabled: true,
    children: 'Disabled',
    type: null
};

export const ButtonTwo = Template.bind({});
ButtonTwo.args = {
    type: "two",
    children: 'Button Text',
    disabled: null
}

export const ButtonThree = Template.bind({});
ButtonThree.args = {
    type: "three",
    children: 'Button Text',
    disabled: null
}

export const ButtonFour = Template.bind({});
ButtonFour.args = {
    type: "four",
    disabled: null,
    children: 'Button Text',
}

export const ButtonOne = Template.bind({});
ButtonOne.args = {
    disabled: false,
    type: null,
    children: 'Button Text'
}
