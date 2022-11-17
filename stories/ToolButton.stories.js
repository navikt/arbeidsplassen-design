import React from "react";
import Button from "../src/Button/Button";
import Trash from "../src/Feather/Trash";
import Heart from "../src/Feather/Heart";
import ToolButton from "../src/ToolButton/ToolButton";
import XIcon from "../src/Feather/XIcon";

export default {
    title: "Components/ToolButton",
    component: ToolButton,
    parameters: {
        docs: {
            description: {
                component:
                    "Får bare benyttes for funksjoner og med ikoner som er godt etablert i digitale flater. Når en ikon ikke er godt kjent eller man ønsker å tydligjøre funksjonen så kan man bruke tool button med label.",
            },
        },
    },
};

export const Default = (args) => (
    <ToolButton {...args} icon={<XIcon />} ariaLabel="Lukk" />
);

export const WithLabel = (args) => (
    <ToolButton {...args} icon={<XIcon />}>
        Lukk
    </ToolButton>
);
