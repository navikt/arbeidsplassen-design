import Layout from "../examples/Layout";
import { Alert, Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import { LOREM_IPSUM_PARAGRAPH } from "@/examples/loremIpsum";
import { useState } from "react";

const GlobalAlertExample = () => {
    const [variant, setVariant] = useState("error");
    const [size, setSize] = useState("medium");
    const [fullWidth, setFullWidth] = useState(false);
    const [inline, setInline] = useState(false);

    return (
        <Layout title="Alert (avviklet)">
            <Alert variant={variant} size={size} fullWidth={fullWidth} inline={inline}>
                {LOREM_IPSUM_PARAGRAPH}
            </Alert>

            <Heading size="medium" level="2" spacing className="mt-12">
                Props
            </Heading>
            <HStack gap="24">
                <RadioGroup legend="status" value={variant} onChange={setVariant}>
                    {["error", "warning", "info", "success"].map((option) => (
                        <Radio value={option}>{option}</Radio>
                    ))}
                </RadioGroup>
                <RadioGroup legend="size" value={size} onChange={setSize}>
                    {["medium", "small"].map((option) => (
                        <Radio value={option}>{option}</Radio>
                    ))}
                </RadioGroup>
                <RadioGroup legend="fullWidth" value={fullWidth} onChange={setFullWidth}>
                    <Radio value={false}>false</Radio>
                    <Radio value={true}>true</Radio>
                </RadioGroup>
                <RadioGroup legend="inline" value={inline} onChange={setInline}>
                    <Radio value={false}>false</Radio>
                    <Radio value={true}>true</Radio>
                </RadioGroup>
            </HStack>
        </Layout>
    );
};

export default GlobalAlertExample;
