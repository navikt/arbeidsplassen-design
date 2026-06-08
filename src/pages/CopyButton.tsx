import { CopyButton, Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";
import Layout from "@/examples/Layout";

export default function CopyButtonExample() {
    const [variant, setVariant] = useState<"neutral" | "accent">("neutral");

    return (
        <Layout title="CopyButton">
            <Heading size="medium" level="2" spacing>
                Bare ikon
            </Heading>
            <CopyButton data-color={variant} copyText="3.14" className="mb-8" />

            <Heading size="medium" level="2" spacing>
                Med tekst
            </Heading>
            <CopyButton copyText="3.14" data-color={variant} text="Kopier" className="mb-8" />

            <PropsCard>
                <HStack gap="space-24">
                    <RadioGroup legend="variant" value={variant} onChange={setVariant}>
                        {["neutral", "accent"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
}
