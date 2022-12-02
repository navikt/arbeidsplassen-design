import React from "react";
import Heading from "../src/Heading/Heading";
import ConfirmationDialogue from "../src/ConfirmationDialogue/ConfirmationDialogue";

export default {
    title: "Components/ConfirmationDialogue",
    component: ConfirmationDialogue,
    args: {
        onClose: undefined,
    },
};

export const Default = (args) => (
    <ConfirmationDialogue {...args}>
        <Heading level="3" size="xsmall">
            Confirmation dialogue
        </Heading>
        One morning, when Gregor Samsa woke from troubled dreams.
    </ConfirmationDialogue>
);
