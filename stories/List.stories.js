import React from "react";
import List from "../src/List/List";

export default {
    title: "Typography/List",
    component: List,
};

export const Default = (args) => (
    <List {...args}>
        <li>Armour-like back</li>
        <li>Brown belly</li>
        <li>Stiff sections</li>
        <li>The bedding</li>
    </List>
);
