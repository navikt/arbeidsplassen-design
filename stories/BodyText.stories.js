import React from "react";
import BodyText from "../src/BodyText/BodyText";
import Container from "../src/Container/Container";

export default {
    title: "Example/BodyText",
    component: BodyText,
    decorators: [(Story) => <Container size="medium">{Story()}</Container>],
};

export const Default = (args) => (
    <BodyText>
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.
    </BodyText>
);
