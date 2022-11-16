import React from "react";
import Anchor from "../src/Anchor/Anchor";
import ChevronLeft from "../src/Feather/ChevronLeft";

export default {
    title: "Components/Anchor",
    component: Anchor,
};

export const Default = (args) => <Anchor {...args} />;
Default.args = {
    children: "Gå til forsiden",
    href: "#",
};

export const Dark = (args) => (
    <Anchor href="#" dark>
        Gå til forsiden
    </Anchor>
);

export const WithIcon = (args) => (
    <Anchor href="#">
        <ChevronLeft /> Tilbake
    </Anchor>
);
