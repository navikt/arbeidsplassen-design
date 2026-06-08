import { useState } from "react";
import { ConfirmationPanel, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import PropsCard from "@/examples/PropsCard";
import Layout from "@/examples/Layout";
import { PLACEHOLDER_INPUT_ERROR } from "@/examples/placeholders";

export default function ConfirmationPanelExample() {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false);

    return (
        <Layout title="ConfirmationPanel (avviklet)">
            <ConfirmationPanel
                checked={checked}
                label="Ja, jeg samtykker."
                onChange={() => setChecked((x) => !x)}
                error={error ? PLACEHOLDER_INPUT_ERROR : undefined}
            >
                For å komme videre må du gi oss lov til å hente inn og bruke opplysninger om deg.
            </ConfirmationPanel>

            <PropsCard>
                <HStack gap="space-24">
                    <RadioGroup legend="error" value={error} onChange={setError}>
                        <Radio value={false}>false</Radio>
                        <Radio value={true}>true</Radio>
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
}
