import React, { useState } from "react";
import { HStack, Radio, RadioGroup, TextField } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import PropsCard from "@/examples/PropsCard";

export default function TextFieldExample() {
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    return (
        <Layout title="TextField">
            <TextField
                label="Har du noen tilbakemeldinger?"
                description="Vi lagrer bare selve meldingen, ikke hvem som sendte den."
                error={error ? "Dette ser feil ut!" : undefined}
                disabled={disabled}
                readOnly={readOnly}
            />

            <PropsCard>
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
            </PropsCard>
        </Layout>
    );
}
