import { HStack, Radio, RadioGroup, Tag } from "@navikt/ds-react";
import Layout from "@/examples/Layout";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";

export default function TagExample() {
    const [variant, setVariant] = useState<TagVariant>("outline");
    const [size, setSize] = useState<"xsmall" | "small" | "medium">("medium");

    return (
        <Layout title="Tag">
            <HStack gap="space-4" className="mb-16">
                {tagColors.map((color) => (
                    <Tag variant={variant} data-color={color} size={size} key={color}>
                        {color}
                    </Tag>
                ))}
            </HStack>

            <PropsCard>
                <HStack gap="space-24">
                    <RadioGroup legend="variant" value={variant} onChange={setVariant}>
                        {["default", "moderate", "filled"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                    <RadioGroup legend="size" value={size} onChange={setSize}>
                        {["medium", "small", "xsmall"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
}
