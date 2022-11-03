import React from "react";
import Container from "../src/Container/Container";
import BodyText from "../src/BodyText/BodyText";
import Footer from "../src/Footer/Footer";

export default {
    title: "Example/Footer",
    component: Footer,
    parameters: {
        layout: "fullscreen",
    },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
