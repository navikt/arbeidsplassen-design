import { Switch } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "@/examples/Layout";

export default function CookieBannerExample() {
    const [showCookieBanner, setShowCookieBanner] = useState(true);

    return (
        <Layout
            title="CookieBanner"
            cookieBannerArgs={
                showCookieBanner
                    ? {
                          onClose: () => {
                              setShowCookieBanner(false);
                          },
                      }
                    : false
            }
        >
            <Switch checked={showCookieBanner} onChange={(e) => setShowCookieBanner(e.target.checked)}>
                Vis cookie banner
            </Switch>
        </Layout>
    );
}
