import React from "react";
import Anchor from "../src/Anchor/Anchor";
import ChevronLeft from "../src/Feather/ChevronLeft";
import Tag from "../src/Tag/Tag";

export default {
    title: "Example/Tag",
    component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Oslo",
};

export const Info = Template.bind({});
Info.args = {
    children: "Oslo",
    variant: "info",
};

export const Success = Template.bind({});
Success.args = {
    children: "Oslo",
    variant: "success",
};

export const Error = Template.bind({});
Error.args = {
    children: "Oslo",
    variant: "error",
};

export const Neutral = Template.bind({});
Neutral.args = {
    children: "Oslo",
    variant: "neutral",
};
