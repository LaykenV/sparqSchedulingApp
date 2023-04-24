import { CustomChip } from "../components/CustomChip";
import React from "react";

export default {
    title: "Components/CustomChip",
    component: CustomChip,
};

const Template = args => <CustomChip {...args} />

export const DisabledChip = Template.bind({});
DisabledChip.args = {
    label: 'Disabled',
    disabled: true,
    selected: false
};

export const DefaultChip = Template.bind({});
DefaultChip.args = {
    label: 'Default',
    disabled: false,
    selected: false
}

export const SelectedChip = Template.bind({});
SelectedChip.args = {
    label: 'Filled',
    disabled: false,
    selected: true
}