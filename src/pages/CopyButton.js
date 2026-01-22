import { CopyButton, Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";

const CopyButtonExample = () => {
    const [variant, setVariant] = useState("neutral");

    return (
        <Layout title="CopyButton">
            <Heading size="medium" level="2" spacing>
                Bare ikon
            </Heading>
            <CopyButton variant={variant} copyText="3.14" className="mb-8" />

            <Heading size="medium" level="2" spacing>
                Med tekst
            </Heading>
            <CopyButton copyText="3.14" variant={variant} text="Kopier" className="mb-8" />

            <PropsCard>
                <HStack gap="space-24">
                    <RadioGroup legend="variant" value={variant} onChange={setVariant}>
                        {["neutral", "action"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
};

export default CopyButtonExample;
