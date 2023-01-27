import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";

const DatePickerExample = () => {
    const { datepickerProps, inputProps, selectedDay } = UNSAFE_useDatepicker({
        fromDate: new Date("Aug 23 2019"),
        onDateChange: console.log,
    });

    return (
        <div className="min-h-96">
            <UNSAFE_DatePicker {...datepickerProps}>
                <UNSAFE_DatePicker.Input {...inputProps} label="Velg dato" />
            </UNSAFE_DatePicker>
            <div className="pt-4">{selectedDay && selectedDay.toDateString()}</div>
        </div>
    );
};

export default DatePickerExample;