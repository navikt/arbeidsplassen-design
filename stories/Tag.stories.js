import React from "react";
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
