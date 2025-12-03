import { HStack, Radio, RadioGroup, Tag } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";

const TagExample = () => {
    const [variant, setVariant] = useState("default");
    const [size, setSize] = useState("medium");

    return (
        <Layout title="Tag">
            <HStack gap="4" className="mb-16">
                {["info", "success", "warning", "error", "neutral", "alt1", "alt2", "alt3"].map((tag) => (
                    <Tag variant={variant !== "default" ? `${tag}-${variant}` : tag} size={size}>
                        {tag}
                    </Tag>
                ))}
            </HStack>

            <PropsCard>
                <HStack gap="24">
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
};

export default TagExample;
