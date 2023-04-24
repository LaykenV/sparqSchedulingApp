import SearchBar from "../components/SearchBar";
import React from "react";


export default {
    title: "Components/SearchBar",
    component: SearchBar,
};

const Template = args => <SearchBar {...args} />

export const EmptySearchBar = Template.bind({});
EmptySearchBar.args = {
    disabled: false,
    placeholder: "Empty Search Bar"
}

export const DisabledSearchBar = Template.bind({});
DisabledSearchBar.args = {
    disabled: true,
    placeholder: "Disabled"
}