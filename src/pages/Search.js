import { Heading, HStack, Radio, RadioGroup, Search } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import React, { useState } from "react";

const SearchExample = () => {
    const [variant, setVariant] = useState("primary");
    const [size, setSize] = useState("medium");

    return (
        <Layout title="Search">
            <form>
                <Search label="Søk etter ledige stillinger" variant={variant} size={size} />

                <Heading size="medium" level="2" spacing className="mt-24">
                    Props
                </Heading>
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
            </form>
        </Layout>
    );
};

export default SearchExample;
