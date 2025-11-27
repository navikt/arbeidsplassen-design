import { useState } from "react";
import { Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";

export default function RadioExample() {
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    return (
        <Layout title="Radio">
            <RadioGroup
                legend="Velg din aldersgruppe"
                description="Informasjonen blir brukt for å gi deg bedre søketreff."
                onChange={(val) => console.log(val)}
                defaultValue="10"
                error={error ? "Dette ser feil ut!" : undefined}
                disabled={disabled}
                readOnly={readOnly}
            >
                <Radio value="10">10-20 år</Radio>
                <Radio value="20">21-45 år</Radio>
                <Radio value="40">46-80 år</Radio>
            </RadioGroup>

            <Heading size="medium" level="2" spacing className="mt-24">
                Props
            </Heading>
            <HStack gap="24">
                <RadioGroup legend="error" value={error} onChange={setError}>
                    <Radio value={false}>false</Radio>
                    <Radio value={true}>true</Radio>
                </RadioGroup>
                <RadioGroup legend="disabled" value={disabled} onChange={setDisabled}>
                    <Radio value={false}>false</Radio>
                    <Radio value={true}>true</Radio>
                </RadioGroup>
                <RadioGroup legend="readOnly" value={readOnly} onChange={setReadOnly}>
                    <Radio value={false}>false</Radio>
                    <Radio value={true}>true</Radio>
                </RadioGroup>
            </HStack>
        </Layout>
    );
}
