import { useState } from "react";
import { Heading, HStack, Radio, RadioGroup, Switch } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const SwitchExample = () => {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);

    return (
        <Layout title="Switch">
            <Switch loading={loading} disabled={disabled} readOnly={readOnly}>
                Motta beskjed på e-post ved nye treff
            </Switch>
            <Heading size="medium" level="2" spacing className="mt-24">
                Props
            </Heading>

            <HStack gap="24">
                <RadioGroup legend="loading" value={loading} onChange={setLoading}>
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

export default SwitchExample;
