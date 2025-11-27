import { Ingress } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const IngressExample = () => {
    return (
        <Layout title="Ingress (avviklet)">
            <Ingress>
                Vil du bli kjent med en bedrift? Følg en direkte sending der bedriften forteller om seg selv og hva
                slags stillinger du kan søke på.
            </Ingress>
        </Layout>
    );
};

export default IngressExample;
