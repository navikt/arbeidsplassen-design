import React from "react";
import Heading from "../src/Heading/Heading";
import Container from "../src/Container/Container";

export default {
    title: "Typography/Heading",
    component: Heading,
    decorators: [(Story) => <Container size="medium">{Story()}</Container>],
};

export const Default = () => (
    <>
        <Heading level="1">Heading XXL</Heading>
        <Heading level="2">Heading XL</Heading>
        <Heading level="3">Heading L</Heading>
        <Heading level="4">Heading M</Heading>
        <Heading level="5">Heading S</Heading>
        <Heading level="6">Heading XS</Heading>
    </>
);
