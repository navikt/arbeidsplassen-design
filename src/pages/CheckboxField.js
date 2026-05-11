import { CheckboxField } from "@/packages/arbeidsplassen-react/CheckboxField/CheckboxField";
import {useState} from "react";
import Layout from "@/examples/Layout";
import PropsCard from "@/examples/PropsCard";
import {HStack, Radio, RadioGroup} from "@navikt/ds-react";

const CheckboxFieldExample = () => {
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false);

    return (
        <Layout title="CheckboxField">
            <CheckboxField
                label="Ja, jeg samtykker."
                checked={checked}
                onChange={setChecked}
                error={error ? "Dette ser feil ut!" : undefined}
            >
                For å komme videre må du gi oss lov til å hente inn og bruke opplysninger om deg.
            </CheckboxField>
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
};

export default CheckboxFieldExample;
