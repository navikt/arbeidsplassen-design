import "@navikt/ds-css/darkside";
import "../packages/arbeidsplassen-css/index.css";
import "../packages/arbeidsplassen-theme/index.css";
import { Theme } from "@navikt/ds-react/Theme";

export default function App({ Component, pageProps }) {
  return (
    <Theme theme="light">
      <Component {...pageProps} />
    </Theme>
  );
}
