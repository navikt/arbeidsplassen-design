import Layout from "../examples/Layout";
import {
  BodyLong,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Heading,
  Panel,
  Switch,
} from "@navikt/ds-react";

export default function Home() {
  return (
    <Layout title="Designsystem">
      <Heading level="2" size="medium" title="Known issues" spacing>
        Known issues
      </Heading>

      <Panel border className="mb-2">
        <BodyLong spacing>
          Checkbox i dark theme har feil farge på hakeikon, skal ikke være hvit
          men mørk blå
        </BodyLong>
        <CheckboxGroup hideLegend defaultValue={["alta"]}>
          <Checkbox value="alta">Alta</Checkbox>
        </CheckboxGroup>
      </Panel>

      <Panel border className="mb-2">
        <BodyLong spacing>
          Checkbox med readOnly i dark theme har feil farge på check mark, bør
          være lysere
        </BodyLong>
        <CheckboxGroup hideLegend readOnly defaultValue={["alta"]}>
          <Checkbox value="alta">Alta</Checkbox>
        </CheckboxGroup>
      </Panel>

      <Panel border className="mb-2">
        <BodyLong spacing>
          Switch i dark theme har kanskje for liten kontrast mot mørk bakgrunn
          når den ikke er skrudd på
        </BodyLong>
        <Switch>Slå på notifikasjoner</Switch>
      </Panel>

      <Panel border className="mb-2">
        <BodyLong spacing>
          Shadow rundt date field popup er for mørk i dark theme, nesten ikke
          mulig å se
        </BodyLong>
        <DatePicker>
          <DatePicker.Input label="Velg dato" />
        </DatePicker>
      </Panel>
    </Layout>
  );
}
