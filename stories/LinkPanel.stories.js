import React from "react";
import LinkPanel, {
    LinkPanelDescription,
    LinkPanelTitle,
} from "../src/LinkPanel/LinkPanel";
import Heading from "../src/Heading/Heading";
import BodyText from "../src/BodyText/BodyText";

export default {
    title: "Example/LinkPanel",
    component: LinkPanel,
    decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
};

export const Default = (args) => (
    <LinkPanel {...args}>
        <LinkPanelTitle>Link panel</LinkPanelTitle>
    </LinkPanel>
);

export const WithBodyText = (args) => (
    <LinkPanel {...args}>
        <LinkPanelTitle>Link panel</LinkPanelTitle>
        <LinkPanelDescription>
            One morning, when Gregor Samsa woke from troubled dreams.
        </LinkPanelDescription>
    </LinkPanel>
);