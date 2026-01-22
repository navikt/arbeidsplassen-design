import "@navikt/ds-css";
import "../packages/arbeidsplassen-css/index.css";
import "../packages/arbeidsplassen-theme/index.css";
import { Box, Switch, Theme } from "@navikt/ds-react";
import { useState } from "react";

export default function App({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <Theme theme={darkMode ? "dark" : "light"}>
            <Component {...pageProps} />
            <Box position="fixed" bottom="2" left="2">
                <Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)}>
                    Dark mode
                </Switch>
            </Box>
        </Theme>
    );
}
