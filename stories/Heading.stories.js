import React from "react";
import Heading from "../src/Heading/Heading";

export default {
    title: "Example/Heading",
    component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
    level: "1",
    children: "Heading",
};

export const Hierarchy = () => (
    <>
        <Heading level="1">Heading XXL</Heading>
        <Heading level="2">Heading XL</Heading>
        <Heading level="3">Heading L</Heading>
        <Heading level="4">Heading M</Heading>
        <Heading level="5">Heading S</Heading>
        <Heading level="6">Heading XS</Heading>
    </>
);
