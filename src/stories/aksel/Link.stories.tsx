import type { Meta, StoryObj } from "@storybook/react";
import { BodyLong, Link } from "@navikt/ds-react";

const meta = {
    title: "Aksel/Link",
    component: Link,
    tags: ["autodocs"],
    argTypes: {
        "data-color": { control: "select", options: ["accent", "neutral"] },
        underline: { control: "boolean" },
        as: { table: { disable: true } },
        children: { table: { disable: true } },
        href: { table: { disable: true } },
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        as: "a",
        href: "#",
        children: "Les mer om Arbeidsplassen",
        "data-color": "accent",
        underline: true,
    },
};
export const InText: Story = {
    args: {
        as: "a",
        href: "#",
        children: "Les mer om Arbeidsplassen",
        "data-color": "accent",
        underline: true,
    },
    render: (args) => (
        <BodyLong spacing>
            Officia incididunt Culpa sit aute est duis minim in in voluptate velit Incididunt laborum nisi nisi Lorem
            vofficia sit aute est duis minim adipisicing non veniam culpa sit aute est duis{" "}
            <Link {...args} inlineText href="/">
                dette er en ganske lang lenke som brekker til flere linjer ved behov
            </Link>{" "}
            minim in in voluptate velit Incididunt laborum nisi nisi Lorem officia adipisicing non veniam occaecat
            commodo id ad aliquip.
        </BodyLong>
    ),
};
