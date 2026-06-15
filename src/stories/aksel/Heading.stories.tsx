import type { Meta, StoryObj } from "@storybook/react";
import { Box, Heading, VStack } from "@navikt/ds-react";

type HeadingLevel = "1" | "2" | "3" | "4" | "5" | "6";

type HeadingStoryArgs = {
    size: "xlarge" | "large" | "medium" | "small" | "xsmall";
    level: HeadingLevel;
    children: string;
    spacing?: boolean;
};

function HeadingStory({ level, ...props }: HeadingStoryArgs) {
    return <Heading {...props} level={level} />;
}

const meta = {
    title: "Aksel/Heading",
    component: HeadingStory,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select", options: ["xlarge", "large", "medium", "small", "xsmall"] },
        level: { control: "select", options: ["1", "2", "3", "4", "5", "6"] },
        children: { table: { disable: true } },
        spacing: { control: "boolean" },
    },
} satisfies Meta<typeof HeadingStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: "large",
        level: "1",
        children: "Om Arbeidsplassen",
    },
};
export const Sizes: Story = {
    args: {
        size: "large",
        level: "1",
        children: "Om Arbeidsplassen",
        spacing: false,
    },
    argTypes: {
        size: { table: { disable: true } },
        level: { table: { disable: true } },
        children: { table: { disable: true } },
        spacing: { control: "boolean" },
    },
    render: (args) => {
        return (
            <VStack gap="space-16">
                <Heading {...args} size="xlarge">
                    Dette er en overskrift i xlarge (Desktop: 40px, Mobil: 32px)
                </Heading>
                <Heading {...args} size="large">
                    Dette er en overskrift i large (Desktop: 32px, Mobil: 28px)
                </Heading>
                <Heading {...args} size="medium">
                    Dette er en overskrift i medium (24px)
                </Heading>
                <Heading {...args} size="small">
                    Dette er en overskrift i small (20px)
                </Heading>
                <Heading {...args} size="xsmall">
                    Dette er en overskrift i xsmall (18px)
                </Heading>
            </VStack>
        );
    },
};

export const Color: Story = {
    args: {
        size: "large",
        level: "1",
        children: "Om Arbeidsplassen",
        spacing: false,
    },
    argTypes: {
        size: { table: { disable: true } },
        level: { table: { disable: true } },
        children: { table: { disable: true } },
        spacing: { table: { disable: true } },
    },
    render: () => {
        const lorem = "Hva kan vi hjelpe deg med?";
        return (
            <VStack gap="space-8">
                <div>
                    <span>Default</span>
                    <Heading textColor="default" size="medium">
                        {lorem}
                    </Heading>
                </div>
                <hr />
                <div>
                    <span>Subtle</span>
                    <Heading textColor="subtle" size="medium">
                        {lorem}
                    </Heading>
                </div>
                <hr />
                <div>
                    <span>Contrast</span>
                    <Box background="neutral-strong">
                        <Heading textColor="contrast" size="medium">
                            {lorem}
                        </Heading>
                    </Box>
                </div>
                <hr />
                <div>
                    <span>Default + data-color</span>
                    <Heading textColor="default" data-color="accent" size="medium">
                        {lorem}
                    </Heading>
                </div>
                <hr />
                <div>
                    <span>Subtle + data-color</span>
                    <Heading textColor="subtle" data-color="accent" size="medium">
                        {lorem}
                    </Heading>
                </div>
                <hr />
                <div>
                    <span>Contrast + data-color</span>
                    <Box background="neutral-strong">
                        <Heading textColor="contrast" data-color="accent" size="medium">
                            {lorem}
                        </Heading>
                    </Box>
                </div>
            </VStack>
        );
    },
};
