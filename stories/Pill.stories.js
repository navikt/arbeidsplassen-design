import React from "react";
import Pill from "../src/Pill/Pill";

export default {
    title: "Example/Pill",
    component: Pill,
};

export const Default = (args) => <Pill {...args} />;
Default.args = {
    children: "Fagbrev tømrer",
};
