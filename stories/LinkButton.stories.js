import React from "react";
import LinkButton from "../src/LinkButton/LinkButton";

export default {
    title: "Example/LinkButton",
    component: LinkButton,
};

export const Default = (args) => <LinkButton {...args}></LinkButton>;
Default.args = {
    children: "Small link panel",
};
