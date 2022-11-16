import React from "react";
import Container from "../src/Container/Container";
import TabMenu, { TabMenuItem } from "../src/TabMenu/TabMenu";

export default {
    title: "Components/TabMenu",
    component: TabMenu,
    decorators: [(Story) => <Container size="medium">{Story()}</Container>],
};

export const Default = (args) => (
    <TabMenu {...args}>
        <TabMenuItem active>
            <a href="#">Armour-like back</a>
        </TabMenuItem>
        <TabMenuItem>
            <a href="#">Brown belly</a>
        </TabMenuItem>
        <TabMenuItem>
            <a href="#">Stiff sections</a>
        </TabMenuItem>
        <TabMenuItem>
            <a href="#">The bedding</a>
        </TabMenuItem>
    </TabMenu>
);
