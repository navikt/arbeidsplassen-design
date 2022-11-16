import React from "react";
import Blockquote from "../src/Blockquote/Blockquote";

export default {
    title: "Typography/Blockquote",
    component: Blockquote,
    decorators: [(Story) => <div style={{ maxWidth: 600 }}>{Story()}</div>],
};

export const Default = (args) => (
    <Blockquote caption="– Franz Kafka">
        «He lay on his armour-like back, and if he lifted his head a little he
        could see his brown belly, slightly domed and divided by arches into
        stiff sections.»
    </Blockquote>
);
