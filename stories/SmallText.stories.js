import React from "react";
import BodyText from "../src/BodyText/BodyText";
import Container from "../src/Container/Container";
import SmallText from "../src/SmallText/BodyText";

export default {
    title: "Typography/SmallText",
    component: SmallText,
    decorators: [(Story) => <Container size="medium">{Story()}</Container>],
};

export const Default = (args) => (
    <SmallText>
        One morning, when Gregor Samsa woke from troubled dreams.
    </SmallText>
);
