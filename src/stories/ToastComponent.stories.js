import { ToastComponent } from "../components/ToastComponent";
import React from "react";

export default {
    title: "Components/ToastComponent",
    component: ToastComponent,
}

const Template = args => <ToastComponent {...args}>Test</ToastComponent>

export const SuccessToast = Template.bind({});
SuccessToast.args = {
    state: "success",
}

export const DangerToast = Template.bind({});
DangerToast.args = {
    state: "danger"
}