import { DatePicker, useDatepicker } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const DatePickerExample = () => {
  const { datepickerProps, inputProps, selectedDay } = useDatepicker({
    fromDate: new Date("Aug 23 2019"),
    onDateChange: console.log,
  });

  return (
    <Layout title="DatePicker">
      <DatePicker {...datepickerProps}>
        <DatePicker.Input {...inputProps} label="Velg dato" />
      </DatePicker>
    </Layout>
  );
};

export default DatePickerExample;
