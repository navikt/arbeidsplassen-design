import React from "react";
import Footer from "../src/Footer/Footer";

export default {
    title: "Components/Footer",
    component: Footer,
    parameters: {
        layout: "fullscreen",
    },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
