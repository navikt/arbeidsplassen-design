import React, { useState } from "react";
import { HStack, Radio, RadioGroup, ReadMore } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { PLACEHOLDER_BLOCK } from "@/examples/placeholders";
import PropsCard from "@/examples/PropsCard";

const ReadMoreExample = () => {
    const [size, setSize] = useState("medium");

    return (
        <Layout title="ReadMore">
            <ReadMore header="Slik fungerer det" size={size}>
                {PLACEHOLDER_BLOCK}
            </ReadMore>

            <PropsCard>
                <HStack gap="space-24">
                    <RadioGroup legend="size" value={size} onChange={setSize}>
                        {["large", "medium", "small"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
};

export default ReadMoreExample;
