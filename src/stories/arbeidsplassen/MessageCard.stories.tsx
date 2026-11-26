import type { Meta, StoryObj } from "@storybook/react";
import { MessageCard } from "@navikt/arbeidsplassen-react";
import { BodyLong, Link, VStack } from "@navikt/ds-react";
import { HeadingLevel, MessageCardVariant } from "@/packages/arbeidsplassen-react/MessageCard";

const variants = ["info", "warning", "error"] satisfies MessageCardVariant[];
const levels = ["h2", "h3", "h4", "h5", "h6"] satisfies HeadingLevel[];

const messages = {
    info: "Du kan lagre søket og få beskjed når nye stillinger publiseres.",
    warning: "Stillingsannonsen er ikke publisert ennå.",
    error: "Vi kunne ikke lagre endringene. Prøv igjen.",
};

const jsx = (
    <VStack gap="space-8">
        <BodyLong>Du kan søke etter stilling, sted eller arbeidsgiver.</BodyLong>
        <BodyLong>
            <Link href="https://arbeidsplassen.nav.no/stillinger" inlineText>
                {" "}
                Se ledige stillinger
            </Link>
            .
        </BodyLong>
    </VStack>
);

const meta = {
    title: "Arbeidsplassen/MessageCard",
    component: MessageCard,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: variants,
            description: "Meldingstype",
        },
        title: {
            control: { type: "text" },
            description: "Kort-overskrift",
        },
        titleLevel: {
            control: { type: "select" },
            options: levels,
            description: "Nivå på heading-element",
        },
        children: {
            control: { type: "text" },
            description: "String eller JSX",
        },
    },
} satisfies Meta<typeof MessageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

function getChildrenArgTypes(variant: MessageCardVariant): Story["argTypes"] {
    const mapping = {
        string: messages[variant],
        JSX: jsx,
    };

    return {
        children: {
            control: { type: "select" },
            options: Object.keys(mapping),
            mapping,
        },
    };
}

export const Info: Story = {
    argTypes: getChildrenArgTypes("info"),
    args: {
        variant: "info",
        children: "string",
    },
};

export const Warning: Story = {
    argTypes: getChildrenArgTypes("warning"),
    args: {
        variant: "warning",
        children: "string",
    },
};

export const ErrorMessage: Story = {
    name: "Error",
    argTypes: getChildrenArgTypes("error"),
    args: {
        variant: "error",
        children: "string",
    },
};

export const WithTitleAndLevel: Story = {
    name: "incl. Title and Level",
    argTypes: Info.argTypes,
    args: {
        ...Info.args,
        title: "Lagre søket ditt",
        titleLevel: "h3",
    },
};

export const WithStringAsChildren: Story = {
    name: "with string as Children",
    args: {
        ...Info.args,
        children: messages.info,
    },
};

export const WithJSXAsChildren: Story = {
    name: "with JSX as Children",
    argTypes: {
        children: {
            control: false,
        },
    },
    args: {
        ...Info.args,
        children: jsx,
    },
};
