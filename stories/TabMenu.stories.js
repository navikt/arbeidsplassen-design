import React from "react";
import Container from "../src/Container/Container";
import TabMenu from "../src/TabMenu/TabMenu";

export default {
    title: "Components/TabMenu",
    component: TabMenu,
    decorators: [(Story) => <Container size="medium">{Story()}</Container>],
};

TabMenu.Item.displayName = "TabMenu.Item";

export const Default = (args) => (
    <TabMenu {...args}>
        <TabMenu.Item active>
            <a href="#">Armour-like back</a>
        </TabMenu.Item>
        <TabMenu.Item>
            <a href="#">Brown belly</a>
        </TabMenu.Item>
        <TabMenu.Item>
            <a href="#">Stiff sections</a>
        </TabMenu.Item>
        <TabMenu.Item>
            <a href="#">The bedding</a>
        </TabMenu.Item>
    </TabMenu>
);
