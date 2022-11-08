import React from "react";
import Accordion from "../src/Accordion/Accordion";
import BodyText from "../src/BodyText/BodyText";
import Container from "../src/Container/Container";

export default {
    title: "Example/Accordion",
    component: Accordion,
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (Story) => (
            <Container size="small" className="mt-1">
                {Story()}
            </Container>
        ),
    ],
};

export const Default = (args) => (
    <Accordion title="Accordion title" {...args}>
        <BodyText>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin.
        </BodyText>
        <BodyText>
            He lay on his armour-like back, and if he lifted his head a little
            he could see his brown belly, slightly domed and divided by arches
            into stiff sections.
        </BodyText>
    </Accordion>
);

export const Multiple = () => (
    <div>
        <Accordion title="Accordion title">
            <BodyText>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin.
            </BodyText>
        </Accordion>
        <Accordion title="Accordion title">
            <BodyText>
                He lay on his armour-like back, and if he lifted his head a
                little he could see his brown belly
            </BodyText>
        </Accordion>
        <Accordion title="Accordion title">
            <BodyText>
                slightly domed and divided by arches into stiff sections.
            </BodyText>
        </Accordion>
    </div>
);
