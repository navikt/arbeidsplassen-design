import {Alert, Heading} from "@navikt/ds-react";

const AlertExample = () => {
    return (
        <>
            <Heading size="small" level="2">Info</Heading>
            <Alert variant="info" className="mb-2">
                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
                horrible vermin.
            </Alert>

            <Heading size="small" level="2">Success</Heading>
            <Alert variant="success" className="mb-2">
                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
                horrible vermin.
            </Alert>

            <Heading size="small" level="2">Warning</Heading>
            <Alert variant="warning" className="mb-2">
                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
                horrible vermin.
            </Alert>

            <Heading size="small" level="2">Error</Heading>
            <Alert variant="error" className="mb-2">
                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
                horrible vermin.
            </Alert>

            <Heading size="small" level="2">Inline</Heading>
            <Alert variant="info" inline className="mb-2">
                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
                horrible vermin.
            </Alert>

            <Heading size="small" level="2">Small</Heading>
            <Alert variant="info" size="small" className="mb-2">
                Hvis du er mellom 62 og 67 år når du søker, må du som hovedregel ha hatt
                en pensjonsgivende inntekt som tilsvarer x G, året før du fikk nedsatt
                arbeidsevnen.
            </Alert>

            <Heading size="small" level="2">Full width</Heading>
            <Alert variant="info" fullWidth className="mb-2">
                Hvis du er mellom 62 og 67 år når du søker, må du som hovedregel ha hatt
                en pensjonsgivende inntekt som tilsvarer x G, året før du fikk nedsatt
                arbeidsevnen.
            </Alert>

            <Heading size="small" level="2">Med heading</Heading>
            <Alert variant="info" className="mb-2">
                <Heading spacing size="small" level="3">
                    Viktig informasjon
                </Heading>
                Hvis du er mellom 62 og 67 år når du søker, må du som hovedregel ha hatt
                en pensjonsgivende inntekt som tilsvarer x G, året før du fikk nedsatt
                arbeidsevnen.
            </Alert>
        </>

    );
};

export default AlertExample;