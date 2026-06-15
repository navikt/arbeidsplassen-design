import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, Checkbox, CheckboxGroup } from "@navikt/ds-react";
import { PLACEHOLDER_INPUT_LABEL, PLACEHOLDER_INPUT_OPTIONS } from "../../constants/placeholders";

const meta = {
    title: "Aksel/Accordion",
    component: Accordion,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select", options: ["small", "medium", "large"] },
        indent: { control: "boolean" },
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: null,
        size: "medium",
        indent: false,
    },
    render: (args) => (
        <Accordion {...args}>
            {["Frokost", "Lunsj", "Kvelds"].map((filter) => (
                <Accordion.Item key={filter}>
                    <Accordion.Header>{filter}</Accordion.Header>
                    <Accordion.Content>
                        <CheckboxGroup hideLegend legend={PLACEHOLDER_INPUT_LABEL}>
                            {PLACEHOLDER_INPUT_OPTIONS.map((option) => (
                                <Checkbox key={option} value={option}>{option}</Checkbox>
                            ))}
                        </CheckboxGroup>
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion>
    ),
};
