import { ConfirmationPanel } from "@navikt/ds-react";
import { useState } from "react";

const ConfirmationPanelExample = () => {
  const [state, setState] = useState(false);
  return (
    <ConfirmationPanel
      checked={state}
      label="Ja, jeg samtykker."
      onChange={() => setState((x) => !x)}
    >
      For å komme videre må du gi oss lov til å hente inn og bruke opplysninger
      om deg.
    </ConfirmationPanel>
  );
};

export default ConfirmationPanelExample;