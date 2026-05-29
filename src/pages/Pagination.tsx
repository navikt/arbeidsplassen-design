import { HStack, Pagination, Radio, RadioGroup } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "@/examples/Layout";
import PropsCard from "@/examples/PropsCard";

export default function PaginationExample() {
    const [pageState, setPageState] = useState(2);

    const [size, setSize] = useState<"xsmall" | "small" | "medium">("medium");
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

            <PropsCard>
                <HStack gap="space-24">
                    <RadioGroup legend="size" value={size} onChange={setSize}>
                        {["xsmall", "medium", "small"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                    <RadioGroup legend="prevNextTexts" value={prevNextTexts} onChange={setPrevNextTexts}>
                        <Radio value={true}>true</Radio>
                        <Radio value={false}>false</Radio>
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
}
