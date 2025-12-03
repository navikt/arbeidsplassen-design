import Layout from "../examples/Layout";
import { BodyLong, Heading, Link } from "@navikt/ds-react";
import { NotFound } from "@navikt/arbeidsplassen-react";

const NotFoundExample = () => {
    return (
        <Layout title="NotFound">
            <NotFound className="mb-16" />
        </Layout>
    );
};

export default NotFoundExample;
