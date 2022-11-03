import React from "react";
import Button from "../src/Button/Button";
import Trash from "../src/Feather/Trash";
import Heart from "../src/Feather/Heart";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        icon: {
            options: ["None", "Trash", "Heart"],
            mapping: {
                None: undefined,
                Trash: <Trash />,
                Heart: <Heart />,
            },
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    children: "Button",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: "tertiary",
    children: "Button",
    icon: <Trash />,
};
