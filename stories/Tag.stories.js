import React from "react";
import Tag from "../src/Tag/Tag";

export default {
    title: "Components/Tag",
    component: Tag,
};

export const Default = (args) => <Tag {...args}>Vermin</Tag>;

export const Small = (args) => <Tag {...args}>Small</Tag>;
Small.args = {
    small: true,
};
