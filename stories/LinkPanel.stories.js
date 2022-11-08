import React from "react";
import LinkPanel from "../src/LinkPanel/LinkPanel";
import Container from "../src/Container/Container";

export default {
    title: "Example/LinkPanel",
    component: LinkPanel,
    decorators: [(Story) => <div style={{ maxWidth: 300 }}>{Story()}</div>],
};

export const Default = (args) => <LinkPanel {...args}></LinkPanel>;
Default.args = {
    children: "Small link panel",
    href: "#",
};
