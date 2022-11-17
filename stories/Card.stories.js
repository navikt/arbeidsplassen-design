import React from "react";
import Card, {
    CardContent,
    CardExpandableContent,
    CardSecondaryMenu,
    CardTitle,
    CardToolbar,
} from "../src/Card/Card";
import Heading from "../src/Heading/Heading";
import Anchor from "../src/Anchor/Anchor";
import Label from "../src/Label/Label";
import BodyText from "../src/BodyText/BodyText";
import SmallText from "../src/SmallText/SmallText";
import Button from "../src/Button/Button";
import Heart from "../src/Feather/Heart";
import Menu from "../src/Feather/Menu";
import MoreVertical from "../src/Feather/MoreVertical";
import ToolButton from "../src/ToolButton/ToolButton";

export default {
    title: "Components/Card",
    component: Card,
    decorators: [(Story) => <div style={{ maxWidth: 800 }}>{Story()}</div>],
};

export const Default = (args) => (
    <div>
        <Card {...args} id="card-2">
            <CardTitle>
                <Heading
                    level="3"
                    size="small"
                    className="dsa-card-header mb-0_5"
                >
                    <Anchor href="#">He lay on his armour-like back</Anchor>
                </Heading>
            </CardTitle>

            <CardSecondaryMenu>
                <Button variant="tertiary" icon={<Heart />}>
                    Button
                </Button>
            </CardSecondaryMenu>

            <CardToolbar>
                <ToolButton ariaLabel="Meny" icon={<MoreVertical />} />
            </CardToolbar>

            <CardContent>
                <Label className="mb-0_5">Franz Kafka</Label>
                <BodyText className="mb-1">
                    However hard he threw himself onto his right, he always
                    rolled back to where he was. He must have tried it a hundred
                    times.
                </BodyText>
                <div className="flex">
                    <div>
                        <Label mini>Category heading</Label>
                        <SmallText>Cat text</SmallText>
                    </div>
                    <div>
                        <Label mini>Category heading</Label>
                        <SmallText>Cat text</SmallText>
                    </div>
                </div>
            </CardContent>

            <CardExpandableContent>
                <Heading level="4" size="xsmall" className="mb-0_5">
                    Expandable content area
                </Heading>
                <BodyText>
                    However hard he threw himself onto his right, he always
                    rolled back to where he was. He must have tried it a hundred
                    times, shut his eyes so that he wouldn't have to look at the
                    floundering legs, and only stopped when he began to feel a
                    mild, dull pain there that he had never felt before. "Oh,
                    God", he thought, "what a strenuous career it is that I've
                    chosen!
                </BodyText>
            </CardExpandableContent>
        </Card>
    </div>
);
