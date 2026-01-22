import { HStack, LinkCard, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { useState } from "react";
import { PLACEHOLDER_HEADING, PLACEHOLDER_PARAGRAPH } from "@/examples/placeholders";
import PropsCard from "@/examples/PropsCard";

export default function LinkCardExample() {
    const [arrowPosition, setArrowPosition] = useState("baseline");
    const [size, setSize] = useState("medium");

    return (
        <Layout title="LinkCard">
            <LinkCard arrowPosition={arrowPosition} size={size} href="#">
                <LinkCard.Title>
                    <LinkCard.Anchor href="#">{PLACEHOLDER_HEADING}</LinkCard.Anchor>
                </LinkCard.Title>
                <LinkCard.Description>{PLACEHOLDER_PARAGRAPH}</LinkCard.Description>
            </LinkCard>

            <PropsCard>
                <HStack gap="space-24">
                    <RadioGroup legend="arrowPosition" value={arrowPosition} onChange={setArrowPosition}>
                        {["baseline", "center"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                    <RadioGroup legend="size" value={size} onChange={setSize}>
                        {["medium", "small"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
}
