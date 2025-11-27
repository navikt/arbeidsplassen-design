import { Heading, HStack, Pagination, Radio, RadioGroup } from "@navikt/ds-react";
import React, { useState } from "react";
import Layout from "../examples/Layout";

const PaginationExample = () => {
    const [pageState, setPageState] = useState(2);

    const [size, setSize] = useState("medium");
    const [prevNextTexts, setPrevNextTexts] = useState(true);

    return (
        <Layout title="Pagination">
            <Pagination
                page={pageState}
                onPageChange={(x) => setPageState(x)}
                count={9}
                boundaryCount={1}
                siblingCount={1}
                prevNextTexts={prevNextTexts}
                size={size}
            />

            <Heading size="medium" level="2" spacing className="mt-24">
                Props
            </Heading>
            <HStack gap="24">
                <RadioGroup legend="size" value={size} onChange={setSize}>
                    {["medium", "small", "xsmall"].map((option) => (
                        <Radio value={option}>{option}</Radio>
                    ))}
                </RadioGroup>
                <RadioGroup legend="prevNextTexts" value={prevNextTexts} onChange={setPrevNextTexts}>
                    <Radio value={true}>true</Radio>
                    <Radio value={false}>false</Radio>
                </RadioGroup>
            </HStack>
        </Layout>
    );
};

export default PaginationExample;
