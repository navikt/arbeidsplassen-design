import { Switch } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { useState } from "react";

const CookieBannerExample = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <Layout
      title="CookieBanner"
      cookieBannerArgs={
        showCookieBanner
          ? {
              onNecessaryOnlyClick: () => {
                setShowCookieBanner(false);
              },
              onAcceptAllClick: () => {
                setShowCookieBanner(false);
              },
            }
          : false
      }
    >
      <Switch
        checked={showCookieBanner}
        onChange={(e) => setShowCookieBanner(e.target.checked)}
      >
        Vis cookie banner
      </Switch>
    </Layout>
  );
};

export default CookieBannerExample;
