import { ErrorSummary } from "@navikt/ds-react";

const ErrorSummaryExample = () => {
    return (
        <ErrorSummary
            heading="Du må fikse disse feilene før du kan sende inn søknad."
            headingTag="h3"
        >
            <ErrorSummary.Item href="#1">
                Felt må fylles ut med alder
            </ErrorSummary.Item>
            <ErrorSummary.Item href="#2">
                Tekstfeltet må ha en godkjent e-mail
            </ErrorSummary.Item>
        </ErrorSummary>
    );
};

export default ErrorSummaryExample;