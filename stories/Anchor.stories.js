import React from "react";
import Anchor from "../src/Anchor/Anchor";
import ChevronLeft from "../src/Feather/ChevronLeft";

export default {
    title: "Example/Anchor",
    component: Anchor,
};

const Template = (args) => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Gå til forsiden",
    href: "#",
};

export const Dark = Template.bind({});
Dark.args = {
    dark: true,
    children: "Gå til forsiden",
    href: "#",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    children: (
        <>
            <ChevronLeft /> Tilbake
        </>
    ),
    href: "#",
};
