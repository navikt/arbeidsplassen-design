import React from "react";
import List from "../src/List/List";
import Container from "../src/Container/Container";

export default {
    title: "Typography/List",
    component: List,
    decorators: [(Story) => <Container size="medium">{Story()}</Container>],
};

export const Default = (args) => (
    <List {...args}>
        <li>Armour-like back</li>
        <li>Brown belly</li>
        <li>Stiff sections</li>
        <li>The bedding</li>
    </List>
);
