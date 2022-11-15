import React from "react";
import Container from "../src/Container/Container";

export default {
    title: "Example/Container",
    component: Container,
    parameters: {
        layout: "fullscreen",
    },
};

export const Default = (args) => (
    <Container {...args}>
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly.
    </Container>
);
