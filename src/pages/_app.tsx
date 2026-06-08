import "@navikt/ds-css";
import "../packages/arbeidsplassen-css/index.css";
import "../packages/arbeidsplassen-theme/index.css";
import { Box, Switch, Theme } from "@navikt/ds-react";
import { useState } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <Theme theme={darkMode ? "dark" : "light"}>
            <Component {...pageProps} />
            <Box>
                <Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)}>
                    Dark mode
                </Switch>
            </Box>
        </Theme>
    );
}
