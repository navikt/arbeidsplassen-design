import { HStack, Radio, RadioGroup, Search } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import React, { useState } from "react";
import PropsCard from "@/examples/PropsCard";

const SearchExample = () => {
    const [variant, setVariant] = useState("primary");
    const [size, setSize] = useState("medium");

    return (
        <Layout title="Search">
            <Search label="Søk etter ledige stillinger" variant={variant} size={size} />

            <PropsCard>
                <HStack gap="24">
                    <RadioGroup legend="variant" value={variant} onChange={setVariant}>
                        {["primary", "secondary", "simple"].map((option) => (
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
};

export default SearchExample;
