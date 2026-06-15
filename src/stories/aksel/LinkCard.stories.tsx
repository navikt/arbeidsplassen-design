import type { Meta, StoryObj } from "@storybook/react";
import { LinkCard } from "@navikt/ds-react";
import { PLACEHOLDER_HEADING, PLACEHOLDER_PARAGRAPH } from "../../constants/placeholders";

const meta = {
    title: "Aksel/LinkCard",
    component: LinkCard,
    tags: ["autodocs"],
    argTypes: {
        className: {
            control: "select",
            options: ["arb-link-panel-primary", "arb-link-panel-secondary", "arb-link-panel-tertiary"],
        },
        size: { control: "select", options: ["small", "medium"] },
        arrowPosition: { control: "select", options: ["baseline", "center"] },
    },
} satisfies Meta<typeof LinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    args: { arrowPosition: "center", size: "medium", className: "" },
    render: (args) => (
        <LinkCard {...args}>
            <LinkCard.Title>
                <LinkCard.Anchor href="#">{PLACEHOLDER_HEADING}</LinkCard.Anchor>
            </LinkCard.Title>
            <LinkCard.Description>{PLACEHOLDER_PARAGRAPH}</LinkCard.Description>
        </LinkCard>
    ),
};
