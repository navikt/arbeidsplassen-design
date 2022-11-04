import React from "react";
import Alert from "../src/Alert/Alert";
import Heading from "../src/Heading/Heading";
import Container from "../src/Container/Container";

export default {
    title: "Example/Alert",
    component: Alert,
    args: {
        onClose: undefined,
    },
    decorators: [
        (Story, context) => {
            if (context.args.fullscreen) {
                return Story();
            } else {
                return <Container size="medium">{Story()}</Container>;
            }
        },
    ],
};

export const Default = (args) => (
    <Alert {...args}>
        <Heading level="3" size="xsmall">
            Alert title
        </Heading>
        One morning, when Gregor Samsa woke from troubled dreams.
    </Alert>
);

export const InlineShortText = (args) => (
    <Alert {...args}>
        <Heading level="3" size="xsmall">
            Alert title
        </Heading>
        Slightly domed and divided by arches.
    </Alert>
);

export const InlineLongText = (args) => (
    <Alert {...args}>
        <Heading level="3" size="xsmall">
            Alert title
        </Heading>
        He lay on his armour-like back, and if he lifted his head a little he
        could see his brown belly, slightly domed and divided by arches into
        stiff sections.
    </Alert>
);

export const InlineNoTitle = (args) => (
    <Alert {...args}>
        He lay on his armour-like back, and if he lifted his head a little he
        could see his brown belly, slightly domed and divided by arches into
        stiff sections.
    </Alert>
);

export const FullscreenShortText = (args) => (
    <Alert {...args}>
        <Heading level="3" size="xsmall">
            Alert title
        </Heading>
        Gregor Samsa woke from troubled dreams.
    </Alert>
);
FullscreenShortText.args = {
    fullscreen: true,
};
FullscreenShortText.parameters = {
    layout: "fullscreen",
};

export const FullscreenLongText = (args) => (
    <Alert {...args}>
        <Heading level="3" size="xsmall">
            Alert title
        </Heading>
        He lay on his armour-like back, and if he lifted his head a little he
        could see his brown belly, slightly domed and divided by arches into
        stiff sections.
    </Alert>
);

FullscreenLongText.args = {
    fullscreen: true,
};
FullscreenLongText.parameters = {
    layout: "fullscreen",
};

export const FullscreenNoTitle = (args) => (
    <Alert {...args}>Gregor Samsa woke from troubled dreams.</Alert>
);
FullscreenNoTitle.args = {
    fullscreen: true,
};
FullscreenNoTitle.parameters = {
    layout: "fullscreen",
};
