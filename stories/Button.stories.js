import React from "react";
import Button from "../src/Button/Button";
import TrashIcon from "../src/Feather/TrashIcon";
import Heart from "../src/Feather/Heart";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        icon: {
            options: ["None", "Trash", "Heart"],
            mapping: {
                None: undefined,
                Trash: <TrashIcon />,
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
    icon: "Trash",
};
