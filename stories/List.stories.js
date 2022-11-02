import React from "react";
import Container from "../src/Container/Container";
import BodyText from "../src/BodyText/BodyText";
import List from "../src/List/List";

export default {
    title: "Example/BodyText",
    component: List,
};

const Template = (args) => (
    <Container size="medium">
        <BodyText {...args} />
    </Container>
);

export const Default = Template.bind({});
Default.args = {
    children:
        "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at arbeidsmarkedet skal være så oversiktlig som mulig for alle, enten du er på jakt etter en jobb eller leter etter en kandidat.",
};
