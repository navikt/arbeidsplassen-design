import React from "react";
import Alert from "../src/Alert/Alert";
import Container from "../src/Container/Container";

export default {
    title: "Example/Alert",
    component: Alert,
};

const Template = (args) => {
    if (args.fullWidth) {
        return <Alert {...args} />;
    } else {
        return (
            <Container size="medium">
                <Alert {...args} />
            </Container>
        );
    }
};

export const Default = Template.bind({});
Default.args = {
    title: "Les dette",
    children:
        "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at arbeidsmarkedet skal være så oversiktlig som mulig for alle, enten du er på jakt etter en jobb eller leter etter en kandidat.",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    variant: "info",
    fullWidth: true,
    title: "Fullført",
    children: "Søket ble lagret",
};

export const WithoutClose = Template.bind({});
WithoutClose.args = {
    variant: "info",
    onClose: undefined,
    title: "Les dette",
    children:
        "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at arbeidsmarkedet skal være så oversiktlig som mulig for alle, enten du er på jakt etter en jobb eller leter etter en kandidat.",
};
