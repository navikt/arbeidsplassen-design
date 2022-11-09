import React from "react";
import LinkPanel from "../src/LinkPanel/LinkPanel";
import Heading from "../src/Heading/Heading";
import BodyText from "../src/BodyText/BodyText";

export default {
    title: "Example/LinkPanel",
    component: LinkPanel,
    decorators: [(Story) => <div style={{ maxWidth: 300 }}>{Story()}</div>],
};

export const Default = (args) => (
    <LinkPanel {...args}>
        <LinkPanel.Title>Link panel</LinkPanel.Title>
    </LinkPanel>
);

export const WithBodyText = (args) => (
    <LinkPanel {...args}>
        <LinkPanel.Title>Link panel</LinkPanel.Title>
        <LinkPanel.Description>
            One morning, when Gregor Samsa woke from troubled dreams.
        </LinkPanel.Description>
    </LinkPanel>
);
