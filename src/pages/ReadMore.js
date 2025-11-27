import React, { useState } from "react";
import { Heading, HStack, Radio, RadioGroup, ReadMore } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { LOREM_IPSUM_BLOCK } from "@/examples/loremIpsum";

const ReadMoreExample = () => {
    const [size, setSize] = useState("medium");

    return (
        <Layout title="ReadMore">
            <ReadMore header="Slik fungerer det" size={size}>
                {LOREM_IPSUM_BLOCK}
            </ReadMore>

            <Heading size="medium" level="2" spacing className="mt-24">
                Props
            </Heading>
            <HStack gap="24">
                <RadioGroup legend="size" value={size} onChange={setSize}>
                    {["large", "medium", "small"].map((option) => (
                        <Radio value={option}>{option}</Radio>
                    ))}
                </RadioGroup>
            </HStack>
        </Layout>
    );
};

export default ReadMoreExample;
