import React from "react";
import LinkPanel from "../src/LinkPanel/LinkPanel";

export default {
    title: "Example/LinkPanel",
    component: LinkPanel,
};

export const Default = (args) => <LinkPanel {...args}></LinkPanel>;
Default.args = {
    children: "Small link panel",
    href: "#",
};
