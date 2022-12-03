import React from "react";
import LinkPanel from "../src/LinkPanel/LinkPanel";

export default {
    title: "Components/LinkPanel",
    component: LinkPanel,
    decorators: [(Story) => <div style={{ maxWidth: 400 }}>{Story()}</div>],
};

LinkPanel.Title.displayName = "LinkPanel.Title";
LinkPanel.Description.displayName = "LinkPanel.Title";

export const Default = (args) => (
    <LinkPanel {...args}>
        <LinkPanel.Title>Link panel title</LinkPanel.Title>
    </LinkPanel>
);

export const WithText = (args) => (
    <LinkPanel {...args}>
        <LinkPanel.Title>Link panel title</LinkPanel.Title>
        <LinkPanel.Description>
            One morning, when Gregor Samsa woke from troubled dreams.
        </LinkPanel.Description>
    </LinkPanel>
);

export const LargeWithText = (args) => (
    <LinkPanel {...args} size="large">
        <LinkPanel.Title>Link panel title</LinkPanel.Title>
        <LinkPanel.Description>
            One morning, when Gregor Samsa woke from troubled dreams.
        </LinkPanel.Description>
    </LinkPanel>
);
