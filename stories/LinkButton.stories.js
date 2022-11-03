import React from "react";
import List from "../src/List/List";
import Container from "../src/Container/Container";
import LinkButton from "../src/LinkButton/LinkButton";

export default {
    title: "Example/LinkButton",
    component: LinkButton,
};

export const Default = (args) => <LinkButton {...args}></LinkButton>;
Default.args = {
    children: "Ledige stillinger",
};
