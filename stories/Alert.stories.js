import React from "react";
import Alert from "../src/Alert/Alert";
import Container from "../src/Container/Container";

export default {
    title: "Example/Alert",
    component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Les dette",
    children:
        "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at arbeidsmarkedet skal være så oversiktlig som mulig for alle, enten du er på jakt etter en jobb eller leter etter en kandidat.",
};
Default.decorators = [
    (Story) => <div style={{ maxWidth: "600px" }}>{Story()}</div>,
];

export const FullWidth = Template.bind({});
FullWidth.args = {
    variant: "info",
    fullWidth: true,
    title: "Fullført",
    children: "Søket ble lagret",
};
FullWidth.parameters = {
    layout: "fullscreen",
};

export const WithoutClose = Template.bind({});
WithoutClose.args = {
    variant: "info",
    onClose: undefined,
    title: "Les dette",
    children:
        "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at arbeidsmarkedet skal være så oversiktlig som mulig for alle, enten du er på jakt etter en jobb eller leter etter en kandidat.",
};
WithoutClose.decorators = [
    (Story) => <div style={{ maxWidth: "600px" }}>{Story()}</div>,
];
