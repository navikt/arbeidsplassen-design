import React from "react";
import Container from "../src/Container/Container";
import Ingress from "../src/Ingress/Ingress";

export default {
    title: "Example/Ingress",
    component: Ingress,
    decorators: [(Story) => <Container size="medium">{Story()}</Container>],
};

export const Default = (args) => (
    <Ingress>
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.
    </Ingress>
);
