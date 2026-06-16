import type { Meta, StoryObj } from "@storybook/react";
import { HelpText } from "@navikt/ds-react";

const meta = {
    title: "Aksel/HelpText",
    component: HelpText,
    tags: ["autodocs"],
    argTypes: {
        strategy: { control: "select", options: ["absolute", "fixed"] },
        placement: { control: "select", options: ["top", "bottom", "left", "right"] },
        title: { control: "text" },
    },
} satisfies Meta<typeof HelpText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Informasjonen er hentet fra X sin statistikk fra 2021",
        title: "Hvor kommer dette fra?",
        strategy: "absolute",
        placement: "right",
    },
};
