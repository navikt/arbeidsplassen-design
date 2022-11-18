import React from "react";
import ListEntity from "../src/ListEntity/ListEntity";
import Heading from "../src/Heading/Heading";
import Anchor from "../src/Anchor/Anchor";
import Label from "../src/Label/Label";
import BodyText from "../src/BodyText/BodyText";
import SmallText from "../src/SmallText/SmallText";
import Button from "../src/Button/Button";
import Heart from "../src/Feather/Heart";
import MoreVertical from "../src/Feather/MoreVertical";
import ToolButton from "../src/ToolButton/ToolButton";

export default {
    title: "Components/ListEntity",
    component: ListEntity,
    decorators: [(Story) => <div style={{ maxWidth: 800 }}>{Story()}</div>],
};

ListEntity.Heading.displayName = "ListEntity.Heading";
ListEntity.SecondaryMenu.displayName = "ListEntity.SecondaryMenu";
ListEntity.Toolbar.displayName = "ListEntity.Toolbar";
ListEntity.Content.displayName = "ListEntity.Content";
ListEntity.ExpandableContent.displayName = "ListEntity.ExpandableContent";

export const Default = (args) => (
    <ListEntity {...args}>
        <ListEntity.Heading>
            <Heading level="3" size="small" className="mb-0_5">
                <Anchor href="#">
                    What a strenuous career it is that I've chosen
                </Anchor>
            </Heading>
        </ListEntity.Heading>

        <ListEntity.SecondaryMenu>
            <Button variant="tertiary" icon={<Heart />}>
                Button
            </Button>
        </ListEntity.SecondaryMenu>

        <ListEntity.Toolbar>
            <ToolButton ariaLabel="Meny" icon={<MoreVertical />} />
        </ListEntity.Toolbar>

        <ListEntity.Content>
            <Label className="mb-0_5">Franz Kafka</Label>
            <BodyText className="mb-1">
                However hard he threw himself onto his right, he always rolled
                back to where he was. He must have tried it a hundred times.
            </BodyText>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <div>
                    <Label mini>Category heading</Label>
                    <SmallText>Cat text</SmallText>
                </div>
                <div>
                    <Label mini>Category heading</Label>
                    <SmallText>Cat text</SmallText>
                </div>
            </div>
        </ListEntity.Content>

        <ListEntity.ExpandableContent>
            <Heading level="4" size="xsmall" className="mb-0_5">
                Expandable content area
            </Heading>
            <BodyText>
                However hard he threw himself onto his right, he always rolled
                back to where he was. He must have tried it a hundred times,
                shut his eyes so that he wouldn't have to look at the
                floundering legs, and only stopped when he began to feel a mild,
                dull pain there that he had never felt before. "Oh, God", he
                thought, "what a strenuous career it is that I've chosen!
            </BodyText>
        </ListEntity.ExpandableContent>
    </ListEntity>
);
