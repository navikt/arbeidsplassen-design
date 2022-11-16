import React from "react";
import Heading from "../src/Heading/Heading";
import Container from "../src/Container/Container";
import Panel from "../src/Panel/Panel";
import Ingress from "../src/Ingress/Ingress";

export default {
    title: "Example/Panel",
    component: Panel,
    parameters: {
        layout: "fullscreen",
    },
};

export const Default = (args) => (
    <>
        <Container
            color={args.fullscreen ? args.color : undefined}
            className={args.fullscreen ? "gb-1" : "gt-1 gb-1"}
        >
            <Panel {...args} color={args.fullscreen ? undefined : args.color}>
                <Heading level="3" size="large" className="mb-0_5">
                    One morning, Gregor Samsa woke
                </Heading>
                <Ingress>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly.
                </Ingress>
            </Panel>
        </Container>

        <Container
            size="medium"
            color={args.fullscreen ? args.color : undefined}
            className={args.fullscreen ? "gb-1" : "gt-1 gb-1"}
        >
            <Panel {...args} color={args.fullscreen ? undefined : args.color}>
                <Heading level="3" size="large" className="mb-0_5">
                    One morning, Gregor Samsa woke
                </Heading>
                <Ingress>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly.
                </Ingress>
            </Panel>
        </Container>

        <Container
            size="small"
            color={args.fullscreen ? args.color : undefined}
            className={args.fullscreen ? "gb-1" : "gt-1 gb-1"}
        >
            <Panel {...args} color={args.fullscreen ? undefined : args.color}>
                <Heading level="3" size="large" className="mb-0_5">
                    One morning
                </Heading>
                <Ingress>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back.
                </Ingress>
            </Panel>
        </Container>
    </>
);

Default.args = {
    color: "orange",
};
