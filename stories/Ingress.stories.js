import React from "react";
import Ingress from "../src/Ingress/Ingress";

export default {
    title: "Typography/Ingress",
    component: Ingress,
    decorators: [(Story) => <div style={{ maxWidth: 600 }}>{Story()}</div>],
};

export const Default = (args) => (
    <Ingress>
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin.
    </Ingress>
);
