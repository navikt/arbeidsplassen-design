import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@navikt/ds-react";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

const meta = {
    title: "Aksel/Stepper",
    component: Stepper,
    tags: ["autodocs"],
    argTypes: {
        orientation: { control: "select", options: ["horizontal", "vertical"] },
        children: { table: { disable: true } },
    },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

function StepperJobSteps(args: Story["args"] & object) {
    const [, updateArgs] = useArgs();
    return (
        <Stepper
            {...args}
            onStepChange={(step) => {
                updateArgs({ activeStep: step });
                args.onStepChange?.(step);
            }}
        >
            <Stepper.Step>Din bedrift</Stepper.Step>
            <Stepper.Step>Om stillingen</Stepper.Step>
            <Stepper.Step>Om bedriften</Stepper.Step>
            <Stepper.Step>Motta søknader</Stepper.Step>
            <Stepper.Step>Publisering</Stepper.Step>
        </Stepper>
    );
}

export const Vertical: Story = {
    args: { orientation: "vertical", activeStep: 2, children: null, onStepChange: fn() },
    render: StepperJobSteps,
};
export const Horizontal: Story = {
    args: { orientation: "horizontal", activeStep: 2, children: null, onStepChange: fn() },
    render: StepperJobSteps,
};

export const Wizard: Story = {
    args: { orientation: "vertical", activeStep: 2, children: null, onStepChange: fn() },
    render: (args) => {
        const [, updateArgs] = useArgs();
        return (
            <Stepper
                {...args}
                onStepChange={(step) => {
                    updateArgs({ activeStep: step });
                    args.onStepChange?.(step);
                }}
            >
                <Stepper.Step completed>Innledning</Stepper.Step>
                <Stepper.Step completed>Saksopplysninger</Stepper.Step>
                <Stepper.Step>Begrunnelse</Stepper.Step>
                <Stepper.Step interactive={false}>Oppsummering</Stepper.Step>
                <Stepper.Step interactive={false}>Bekreftelse</Stepper.Step>
            </Stepper>
        );
    },
};
