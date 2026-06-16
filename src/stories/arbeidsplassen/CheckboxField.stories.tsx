import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxField } from "@navikt/arbeidsplassen-react";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

const meta = {
    title: "Arbeidsplassen/CheckboxField",
    component: CheckboxField,
    tags: ["autodocs", "ai-generated"],
    argTypes: {
        error: {
            control: "text",
        },
        label: {
            control: "text",
        },

        onChange: {
            action: "onChange",
        },
        size: {
            control: "select",
            options: ["small", "medium"],
        },
    },
    args: {
        checked: false,
        size: "medium",
        onChange: fn(),
    },
} satisfies Meta<typeof CheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Samtykke",
        children: "For å komme videre må du gi oss lov til å hente inn og bruke opplysninger om deg.",
        error: "",
    },
    render: (args) => {
        const [{ checked }, updateArgs] = useArgs();

        function onChange() {
            updateArgs({ checked: !checked });
            args.onChange?.();
        }
        return <CheckboxField {...args} onChange={onChange} />;
    },
};
