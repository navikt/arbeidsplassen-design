import type { Meta, StoryObj } from "@storybook/react";
import { FormProgress } from "@navikt/ds-react";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

const meta = {
    title: "Aksel/FormProgress",
    component: FormProgress,
    tags: ["autodocs"],
} satisfies Meta<typeof FormProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: null, activeStep: 2, totalSteps: 5, onOpenChange: fn(), onStepChange: fn() },
    render: (args) => {
        const [, updateArgs] = useArgs();
        function onChange(step: number) {
            updateArgs({ activeStep: step });
            args.onStepChange?.(step);
        }
        return (
            <FormProgress {...args} onStepChange={onChange}>
                <FormProgress.Step completed>Dine opplysninger</FormProgress.Step>
                <FormProgress.Step>Om stillingen</FormProgress.Step>
                <FormProgress.Step>Om bedriften</FormProgress.Step>
                <FormProgress.Step>Søknad</FormProgress.Step>
                <FormProgress.Step interactive={false}>Oppsummering</FormProgress.Step>
            </FormProgress>
        );
    },
};
