import { Checkbox, CheckboxGroup, Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { useState } from "react";

const handleChange = (val) => console.log(val);

function CheckboxTemplate({ error, disabled, readOnly }) {
    return (
        <CheckboxGroup
            legend="Velg arbeidssted"
            description="Du kan velge flere steder om du vil"
            onChange={(val) => handleChange(val)}
            defaultValue={["alta"]}
            error={error ? "Dette ser feil ut!" : undefined}
            disabled={disabled}
            readOnly={readOnly}
        >
            <Checkbox value="alta">Alta</Checkbox>
            <Checkbox value="bardufoss">Bardufoss</Checkbox>
            <Checkbox value="bergen">Bergen</Checkbox>
            <Checkbox value="bodø" indeterminate>
                Bodø (indeterminate)
            </Checkbox>
        </CheckboxGroup>
    );
}

const CheckboxExample = () => {
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    return (
        <Layout title="Checkbox">
            <CheckboxTemplate error={error} disabled={disabled} readOnly={readOnly} />

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
};

export default CheckboxExample;
