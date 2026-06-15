import type { Meta, StoryObj } from "@storybook/react";
import { Chips } from "@navikt/ds-react";
import { PLACEHOLDER_INPUT_OPTIONS } from "../../constants/placeholders";

const meta = {
    title: "Aksel/Chips",
    component: Chips,
    tags: ["autodocs"],
    argTypes: {
        "data-color": {
            control: "select",
            options: [
                "accent",
                "neutral",
                "info",
                "success",
                "warning",
                "danger",
                "meta-purple",
                "meta-lime",
                "brand-beige",
                "brand-blue",
                "brand-magenta",
            ],
        },
        size: { control: "select", options: ["medium", "small"] },
    },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

import { useState } from "react";
import { ChipsToggle, ChipsRemovable } from "./ChipsToggle.stories";

export const Default: Story = {
    args: { size: "medium", children: null, "data-color": "neutral" },
    render: function Render(args) {
        const [selected, setSelected] = useState<string[]>([]);
        return (
            <Chips {...args}>
                {PLACEHOLDER_INPUT_OPTIONS.map((c) => (
                    <Chips.Toggle
                        {...ChipsToggle.args}
                        data-color={args["data-color"]}
                        key={c}
                        selected={selected.includes(c)}
                        onClick={() =>
                            setSelected((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]))
                        }
                    >
                        {c}
                    </Chips.Toggle>
                ))}
            </Chips>
        );
    },
};
export const Removable: Story = {
    args: { size: "medium", children: null, "data-color": "neutral" },
    render: function Render(args) {
        const [chips, setChips] = useState<string[]>(PLACEHOLDER_INPUT_OPTIONS);
        return (
            <Chips {...args}>
                {chips.map((c) => (
                    <Chips.Removable
                        {...ChipsRemovable.args}
                        data-color={args["data-color"]}
                        key={c}
                        onDelete={() => {
                            setChips((prev) => prev.filter((x) => x !== c));
                            ChipsRemovable.args?.onDelete();
                        }}
                    >
                        {c}
                    </Chips.Removable>
                ))}
            </Chips>
        );
    },
};
