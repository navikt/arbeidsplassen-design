import { Heading } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const HeadingExample = () => {
    return (
        <Layout title="Heading">
            <Heading level="1" size="xlarge" spacing>
                Heading xlarge
            </Heading>
            <Heading level="2" size="large" spacing>
                Heading large
            </Heading>
            <Heading level="3" size="medium" spacing>
                Heading medium
            </Heading>
            <Heading level="4" size="small" spacing>
                Heading small
            </Heading>
            <Heading level="5" size="xsmall" spacing>
                Heading xsmall
            </Heading>
        </Layout>
    );
};

export default HeadingExample;
