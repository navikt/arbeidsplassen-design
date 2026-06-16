import type { Meta, StoryObj } from "@storybook/react";
import { GlobalAlert } from "@navikt/ds-react";
import { PLACEHOLDER_HEADING, PLACEHOLDER_PARAGRAPH } from "../../constants/placeholders";

const meta = {
    title: "Aksel/GlobalAlert",
    component: GlobalAlert,
    tags: ["autodocs"],
    argTypes: {
        status: { control: "select", options: ["announcement", "success", "warning", "error"] },
        size: { control: "select", options: ["medium", "small"] },
        centered: { control: "boolean" },
    },
    args: {
        status: "announcement",
        size: "medium",
        centered: true,
        children: null,
    },
} satisfies Meta<typeof GlobalAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        return (
            <GlobalAlert {...args}>
                <GlobalAlert.Header>
                    <GlobalAlert.Title>{PLACEHOLDER_HEADING}</GlobalAlert.Title>
                </GlobalAlert.Header>
                <GlobalAlert.Content>{PLACEHOLDER_PARAGRAPH}</GlobalAlert.Content>
            </GlobalAlert>
        );
    },
};
export const WithCloseButton: Story = {
    args: {},
    render: (args) => {
        return (
            <GlobalAlert {...args}>
                <GlobalAlert.Header>
                    <GlobalAlert.Title>{PLACEHOLDER_HEADING}</GlobalAlert.Title>
                    <GlobalAlert.CloseButton onClick={() => alert("Lukket alert")} />
                </GlobalAlert.Header>
                <GlobalAlert.Content>{PLACEHOLDER_PARAGRAPH}</GlobalAlert.Content>
            </GlobalAlert>
        );
    },
};
