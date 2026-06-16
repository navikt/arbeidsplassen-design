import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker, useRangeDatepicker, useDatepicker } from "@navikt/ds-react";

const meta = {
    title: "Aksel/DatePicker",
    component: DatePicker,
    tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
    args: { showWeekNumber: true, mode: "single" },
    render: ({ showWeekNumber }) => {
        const { datepickerProps, inputProps } = useDatepicker({
            fromDate: new Date(),
            onDateChange: console.log,
        });
        return (
            <DatePicker {...datepickerProps} showWeekNumber={showWeekNumber}>
                <DatePicker.Input {...inputProps} label="Velg dato" />
            </DatePicker>
        );
    },
};

export const Multiple: Story = {
    args: { showWeekNumber: true, mode: "multiple" },
    render: ({ showWeekNumber }) => {
        return (
            <DatePicker
                mode="multiple"
                showWeekNumber={showWeekNumber}
                fromDate={new Date()}
                onSelect={(dates) => console.log(dates)}
            >
                <DatePicker.Input label="Velg datoer" />
            </DatePicker>
        );
    },
};

export const Range: Story = {
    args: { showWeekNumber: true, mode: "range" },
    render: ({ showWeekNumber }) => {
        const { datepickerProps, fromInputProps, toInputProps } = useRangeDatepicker({
            fromDate: new Date(),
            onRangeChange: console.log,
        });
        return (
            <DatePicker {...datepickerProps} showWeekNumber={showWeekNumber}>
                <DatePicker.Input {...fromInputProps} label="Fra dato" />
                <DatePicker.Input {...toInputProps} label="Til dato" />
            </DatePicker>
        );
    },
};

