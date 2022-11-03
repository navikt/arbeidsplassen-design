import React from "react";
import Ingress from "../src/Ingress/Ingress";

export default {
    title: "Example/Ingress",
    component: Ingress,
};

const Template = (args) => (
    <div style={{ maxWidth: "600px" }}>
        <Ingress {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    children:
        "Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at arbeidsmarkedet skal være så oversiktlig som mulig for alle, enten du er på jakt etter en jobb eller leter etter en kandidat.",
};
