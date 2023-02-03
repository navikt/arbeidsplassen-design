import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const DatePickerExample = () => {
  const { datepickerProps, inputProps, selectedDay } = UNSAFE_useDatepicker({
    fromDate: new Date("Aug 23 2019"),
    onDateChange: console.log,
  });

  return (
    <Layout title="DatePicker">
      <UNSAFE_DatePicker {...datepickerProps}>
        <UNSAFE_DatePicker.Input {...inputProps} label="Velg dato" />
      </UNSAFE_DatePicker>
      <div className="pt-4">{selectedDay && selectedDay.toDateString()}</div>
    </Layout>
  );
};

export default DatePickerExample;
