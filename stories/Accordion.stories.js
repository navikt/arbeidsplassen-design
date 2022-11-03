import React from "react";
import Accordion from "../src/Accordion/Accordion";
import BodyText from "../src/BodyText/BodyText";

export default {
    title: "Example/Accordion",
    component: Accordion,
};

export const Default = (args) => <Accordion {...args} />;
Default.args = {
    title: "Accordion title",
    open: false,
    children: (
        <>
            <BodyText className="mb-1">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin.
            </BodyText>
            <BodyText>
                He lay on his armour-like back, and if he lifted his head a
                little he could see his brown belly, slightly domed and divided
                by arches into stiff sections.
            </BodyText>
        </>
    ),
};
Default.decorators = [
    (Story) => <div style={{ maxWidth: "311px" }}>{Story()}</div>,
];

export const MoreThanOne = () => (
    <div>
        <Accordion title="Accordion title" className="mb-1">
            <BodyText>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin.
            </BodyText>
        </Accordion>
        <Accordion title="Accordion title">
            <BodyText>
                He lay on his armour-like back, and if he lifted his head a
                little he could see his brown belly, slightly domed and divided
                by arches into stiff sections.
            </BodyText>
        </Accordion>
    </div>
);

MoreThanOne.decorators = [
    (Story) => <div style={{ maxWidth: "311px" }}>{Story()}</div>,
];
