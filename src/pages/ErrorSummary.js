import { ErrorSummary } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const ErrorSummaryExample = () => {
    return (
        <Layout title="ErrorSummary">
            <ErrorSummary heading="Du må fikse disse feilene før du kan sende inn søknad." headingTag="h3">
                <ErrorSummary.Item href="#1">Felt må fylles ut med alder</ErrorSummary.Item>
                <ErrorSummary.Item href="#2">Tekstfeltet må ha en godkjent e-mail</ErrorSummary.Item>
            </ErrorSummary>
        </Layout>
    );
};

export default ErrorSummaryExample;
