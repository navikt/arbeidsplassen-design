import React from "react";
import Container from "../src/Container/Container";
import Blockquote from "../src/Blockquote/Blockquote";

export default {
    title: "Example/Blockquote",
    component: Blockquote,
    decorators: [(Story) => <Container size="medium">{Story()}</Container>],
};

export const Default = (args) => (
    <Blockquote caption="– Franz Kafka">
        «He lay on his armour-like back, and if he lifted his head a little he
        could see his brown belly, slightly domed and divided by arches into
        stiff sections.»
    </Blockquote>
);
