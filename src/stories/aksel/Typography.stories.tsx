import { PLACEHOLDER_BLOCK, PLACEHOLDER_HEADING, PLACEHOLDER_PARAGRAPH } from "../../constants/placeholders";
import { BodyLong, BodyShort, Detail, ErrorMessage, Heading, Label, List, VStack } from "@navikt/ds-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Aksel/Typography",
    tags: [],
    args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <section className="mb-16">
            <Heading size="xlarge" level="2" spacing>
                {PLACEHOLDER_HEADING}
            </Heading>
            <BodyLong size="large" spacing>
                {PLACEHOLDER_BLOCK}
            </BodyLong>

            <BodyLong spacing>{PLACEHOLDER_BLOCK}</BodyLong>

            <Heading size="large" level="2" spacing>
                {PLACEHOLDER_HEADING}
            </Heading>
            <BodyLong spacing>{PLACEHOLDER_BLOCK}</BodyLong>

            <Heading size="medium" level="3" spacing>
                {PLACEHOLDER_HEADING}
            </Heading>
            <BodyLong spacing>{PLACEHOLDER_PARAGRAPH}</BodyLong>

            <List>
                <List.Item>{PLACEHOLDER_PARAGRAPH}</List.Item>
                <List.Item>{PLACEHOLDER_PARAGRAPH}</List.Item>
                <List.Item>{PLACEHOLDER_BLOCK}</List.Item>
            </List>
        </section>
    ),
};

export const Headings: Story = {
    render: () => (
        <VStack gap="space-16">
            <Heading size="xlarge">Dette er en overskrift i xlarge (Desktop: 40px, Mobil: 32px)</Heading>
            <Heading size="large">Dette er en overskrift i large (Desktop: 32px, Mobil: 28px)</Heading>
            <Heading size="medium">Dette er en overskrift i medium (24px)</Heading>
            <Heading size="small">Dette er en overskrift i small (20px)</Heading>
            <Heading size="xsmall">Dette er en overskrift i xsmall (18px)</Heading>
        </VStack>
    ),
};

export const BodyLongComponent: Story = {
    render: () => {
        const exampleText =
            "Hvis du ikke bor sammen med begge foreldrene dine, kan du ha rett til barnebidrag fra en eller begge foreldre mens du fullfører videregående skole eller tilsvarende.";
        return (
            <VStack gap="space-20">
                <BodyLong size="small">
                    <b>Small (16px):</b> {exampleText}
                </BodyLong>
                <BodyLong size="medium">
                    <b>Medium (default, 18px):</b> {exampleText}
                </BodyLong>
                <BodyLong size="large">
                    <b>Large (20px):</b> {exampleText}
                </BodyLong>
            </VStack>
        );
    },
};

export const BodyShortComponent: Story = {
    render: () => {
        const exampleText = "Du må gjøre en filtrering for å se brukere i listen.";

        return (
            <VStack gap="space-20">
                <BodyShort size="small">
                    <b>Small (16px):</b> {exampleText}
                </BodyShort>
                <BodyShort size="medium">
                    <b>Medium (default, 18px):</b> {exampleText}
                </BodyShort>
                <BodyShort size="large">
                    <b>Large (20px):</b> {exampleText}
                </BodyShort>
            </VStack>
        );
    },
};

export const LabelComponent: Story = {
    render: () => {
        const exampleText = "Oppgi årsaken til at du har ventet mer enn 6 måneder med å søke om refusjon";

        return (
            <VStack gap="space-20">
                <Label>Medium (18px): {exampleText}</Label>
                <Label size="small">Small (16px): {exampleText}</Label>
            </VStack>
        );
    },
};

export const DetailComponent: Story = {
    render: () => {
        const exampleText = "Du må gjøre en filtrering for å se brukere i listen.";

        return (
            <VStack gap="space-20">
                <Detail>Regular: {exampleText}</Detail>
                <Detail weight="semibold">Semibold: {exampleText}</Detail>
            </VStack>
        );
    },
};

export const ErrorMessageComponent: Story = {
    render: () => {
        const exampeText = "Du må fylle ut tekstfeltet før innsending.";

        return (
            <VStack gap="space-20">
                <ErrorMessage>Medium (18px): {exampeText}</ErrorMessage>
                <ErrorMessage size="small">Small (16px): {exampeText}</ErrorMessage>
            </VStack>
        );
    },
};

export const IngressBodyLongLarge: Story = {
    render: () => {
        return (
            <BodyLong size="large">
                Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet. Vårt mål er at arbeidsmarkedet skal
                være så oversiktlig som mulig for alle, enten du er på jakt etter en jobb eller leter etter en kandidat.
            </BodyLong>
        );
    },
};
