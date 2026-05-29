import { Checkbox, CheckboxGroup, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";
import {
    PLACEHOLDER_INPUT_DESCRIPTION,
    PLACEHOLDER_INPUT_ERROR,
    PLACEHOLDER_INPUT_LABEL,
    PLACEHOLDER_INPUT_OPTIONS,
} from "@/examples/placeholders";

const handleChange = (val: string[]) => console.log(val);

interface CheckboxTemplateProps {
    error?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
}

function CheckboxTemplate({ error, disabled, readOnly }: CheckboxTemplateProps) {
    return (
        <CheckboxGroup
            legend={PLACEHOLDER_INPUT_LABEL}
            description={PLACEHOLDER_INPUT_DESCRIPTION}
            onChange={handleChange}
            defaultValue={["Brød"]}
            error={error ? PLACEHOLDER_INPUT_ERROR : undefined}
            disabled={disabled}
            readOnly={readOnly}
        >
            {PLACEHOLDER_INPUT_OPTIONS.map((option) => (
                <Checkbox value={option}>{option}</Checkbox>
            ))}
            <Checkbox value="Paprika" indeterminate>
                Paprika (indeterminate)
            </Checkbox>
        </CheckboxGroup>
    );
}

export default function CheckboxExample() {
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    return (
        <Layout title="Checkbox">
            <CheckboxTemplate error={error} disabled={disabled} readOnly={readOnly} />

            <PropsCard>
                <HStack gap="space-24">
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
