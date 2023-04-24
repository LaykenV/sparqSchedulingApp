import Dropdown from "../components/Dropdown";
import React from "react";


export default {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: {
        numberOfExamples: {type: "number", defaultValue: 4 },
    }
}

const Template = ({ numberOfExamples }) => (
    <Dropdown options={[...Array(numberOfExamples).keys()].map(n => ( {id: `Example ${n + 1}`, name: `Example ${n + 1}`} ))}/>
);

export const BasicDropdown = Template.bind({});