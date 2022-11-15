import React from "react";
import LinkPanel, {
    LinkPanelDescription,
    LinkPanelTitle,
} from "../src/LinkPanel/LinkPanel";

export default {
    title: "Example/LinkPanel",
    component: LinkPanel,
    decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
};

export const Default = (args) => (
    <LinkPanel {...args}>
        <LinkPanelTitle>Link panel title</LinkPanelTitle>
    </LinkPanel>
);

export const WithBodyText = (args) => (
    <LinkPanel {...args}>
        <LinkPanelTitle>Link panel title</LinkPanelTitle>
        <LinkPanelDescription>
            One morning, when Gregor Samsa woke from troubled dreams.
        </LinkPanelDescription>
    </LinkPanel>
);
