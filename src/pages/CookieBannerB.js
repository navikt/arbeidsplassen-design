import { Switch } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { useState } from "react";

const CookieBannerBExample = () => {
    const [showCookieBanner, setShowCookieBanner] = useState(true);

    return (
        <Layout
            title="CookieBannerB"
            cookieBannerBArgs={
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
};

export default CookieBannerBExample;
