import React from "react";
import List from "../src/List/List";

export default {
    title: "Example/List",
    component: List,
    decorators: [(Story) => <div style={{ maxWidth: "600px" }}>{Story()}</div>],
};

export const Default = (args) => (
    <List {...args}>
        <li>Du oppretter selv et jobbtreff på arbeidsplassen.no.</li>
        <li>Du kan koble jobbtreffet med stillingsannonsene dine.</li>
        <li>
            Du velger om jobbtreffet skal annonseres for alle jobbsøkere på
            arbeidsplassen.no, eller om du vil invitere deltakere selv.
        </li>
    </List>
);
