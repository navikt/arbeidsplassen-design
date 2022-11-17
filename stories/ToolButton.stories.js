import React from "react";
import ToolButton from "../src/ToolButton/ToolButton";
import XIcon from "../src/Feather/XIcon";

export default {
    title: "Components/ToolButton",
    component: ToolButton,
    parameters: {
        docs: {
            description: {
                component:
                    "Får bare benyttes for funksjoner og med ikoner som er godt etablert i digitale flater. Hvis du ikke bruker label, så husk å legge på aria-label.",
            },
        },
    },
};

export const WithoutLabel = (args) => (
    <ToolButton {...args} icon={<XIcon />} ariaLabel="Lukk" />
);

export const WithLabel = (args) => (
    <ToolButton {...args} icon={<XIcon />}>
        Lukk
    </ToolButton>
);

WithLabel.parameters = {
    docs: {
        description: {
            story: "Når en ikon ikke er godt kjent eller man ønsker å tydligjøre funksjonen så kan man bruke tool button med label.",
        },
    },
};
