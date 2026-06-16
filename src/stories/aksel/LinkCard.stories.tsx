import type { Meta, StoryObj } from "@storybook/react";
import { HGrid, LinkCard } from "@navikt/ds-react";
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
    args: { arrowPosition: "center", size: "medium", className: "" },
} satisfies Meta<typeof LinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { className: "" },
    render: (args) => (
        <LinkCard {...args}>
            <LinkCard.Title>
                <LinkCard.Anchor href="#">{PLACEHOLDER_HEADING}</LinkCard.Anchor>
            </LinkCard.Title>
            <LinkCard.Description>{PLACEHOLDER_PARAGRAPH}</LinkCard.Description>
        </LinkCard>
    ),
};

export const ClassNamePrimary: Story = {
    args: { className: "arb-link-panel-primary" },
    parameters: {
        docs: {
            description: {
                story: "Branding med className: 'arb-link-panel-primary'",
            },
        },
    },
    render: (args) => (
        <LinkCard {...args}>
            <LinkCard.Title>
                <LinkCard.Anchor href="#">{PLACEHOLDER_HEADING}</LinkCard.Anchor>
            </LinkCard.Title>
            <LinkCard.Description>{PLACEHOLDER_PARAGRAPH}</LinkCard.Description>
        </LinkCard>
    ),
};
export const ClassNameSecondary: Story = {
    args: { className: "arb-link-panel-secondary" },
    parameters: {
        docs: {
            description: {
                story: "Branding med className: 'arb-link-panel-secondary'",
            },
        },
    },
    render: (args) => (
        <LinkCard {...args}>
            <LinkCard.Title>
                <LinkCard.Anchor href="#">{PLACEHOLDER_HEADING}</LinkCard.Anchor>
            </LinkCard.Title>
            <LinkCard.Description>{PLACEHOLDER_PARAGRAPH}</LinkCard.Description>
        </LinkCard>
    ),
};
export const ClassNameTertiary: Story = {
    args: { className: "arb-link-panel-tertiary" },
    parameters: {
        docs: {
            description: {
                story: "Branding med className: 'arb-link-panel-tertiary",
            },
        },
    },
    render: (args) => (
        <LinkCard {...args}>
            <LinkCard.Title>
                <LinkCard.Anchor href="#">{PLACEHOLDER_HEADING}</LinkCard.Anchor>
            </LinkCard.Title>
            <LinkCard.Description>{PLACEHOLDER_PARAGRAPH}</LinkCard.Description>
        </LinkCard>
    ),
};
export const WithImage: Story = {
    args: { className: "arb-link-panel-primary", arrowPosition: "baseline" },
    parameters: {
        docs: {
            description: {
                story: "Branding med className: 'arb-link-panel-tertiary'",
            },
        },
    },
    render: (args) => (
        <HGrid columns={3} gap="space-16">
            <LinkCard {...args}>
                <LinkCard.Image aspectRatio={"4/3"}>
                    <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%23888'%3EPlaceholder%3C/text%3E%3C/svg%3E"
                        alt="Placeholder-bilde"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </LinkCard.Image>
                <LinkCard.Title as="h2">
                    <LinkCard.Anchor href="#">Superrask søknad</LinkCard.Anchor>
                </LinkCard.Title>
                <LinkCard.Description>En enklere måte å komme i kontakt med bedrifter.</LinkCard.Description>
            </LinkCard>

            <LinkCard {...args} className="arb-link-panel-secondary">
                <LinkCard.Image aspectRatio={"4/3"}>
                    <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%23888'%3EPlaceholder%3C/text%3E%3C/svg%3E"
                        alt="Placeholder-bilde"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </LinkCard.Image>
                <LinkCard.Title as="h2">
                    <LinkCard.Anchor href="#">Tips til jobbsøknaden</LinkCard.Anchor>
                </LinkCard.Title>
                <LinkCard.Description>
                    Les våre tips om hvordan skrive søknaden slik at en arbeidsgiver får lyst til å møte deg.
                </LinkCard.Description>
            </LinkCard>

            <LinkCard {...args} className="arb-link-panel-tertiary">
                <LinkCard.Image aspectRatio={"4/3"}>
                    <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%23888'%3EPlaceholder%3C/text%3E%3C/svg%3E"
                        alt="Placeholder-bilde"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </LinkCard.Image>
                <LinkCard.Title as="h2">
                    <LinkCard.Anchor href="#">Jobbe i utlandet?</LinkCard.Anchor>
                </LinkCard.Title>
                <LinkCard.Description>
                    Den Europeiske Jobbmobilitetsportalen (EURES) er et tilbud til deg som ønsker å finne en jobb...
                </LinkCard.Description>
            </LinkCard>
        </HGrid>
    ),
};
