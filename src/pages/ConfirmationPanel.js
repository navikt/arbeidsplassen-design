import { ConfirmationPanel, Heading } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "../examples/Layout";

const ConfirmationPanelExample = () => {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  return (
    <Layout title="ConfirmationPanel">
      <ConfirmationPanel
        checked={state}
        label="Ja, jeg samtykker."
        onChange={() => setState((x) => !x)}
        className="mb-2"
      >
        For å komme videre må du gi oss lov til å hente inn og bruke
        opplysninger om deg.
      </ConfirmationPanel>

      <Heading size="small" level="3" spacing>
        Error
      </Heading>
      <ConfirmationPanel
        checked={state2}
        label="Ja, jeg samtykker."
        onChange={() => setState2((x) => !x)}
        error={!state2 && "Du må samtykke før du kan fortsette."}
      >
        For å komme videre må du gi oss lov til å hente inn og bruke
        opplysninger om deg.
      </ConfirmationPanel>
    </Layout>
  );
};

export default ConfirmationPanelExample;
