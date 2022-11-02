import React from "react";
import Ingress from "../src/Ingress/Ingress";
import Container from "../src/Container/Container";

export default {
    title: "Example/Ingress",
    component: Ingress,
};

const Template = (args) => (
    <Container size="medium">
        <Ingress {...args} />
    </Container>
);

export const Default = Template.bind({});
Default.args = {
    children:
        "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at arbeidsmarkedet skal være så oversiktlig som mulig for alle, enten du er på jakt etter en jobb eller leter etter en kandidat.",
};
