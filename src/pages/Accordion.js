import { useState } from "react";
import { Accordion, Checkbox, CheckboxGroup, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import PropsCard from "@/examples/PropsCard";
import { PLACEHOLDER_INPUT_LABEL, PLACEHOLDER_INPUT_OPTIONS } from "@/examples/placeholders";

const AccordionExample = () => {
    const [size, setSize] = useState("medium");
    const [indent, setIndent] = useState(true);
    return (
        <Layout title="Accordion">
            <Accordion size={size} indent={indent}>
                {["Frokost", "Lunsj", "Kvelds"].map((filter) => (
                    <Accordion.Item>
                        <Accordion.Header>{filter}</Accordion.Header>
                        <Accordion.Content>
                            <CheckboxGroup hideLegend legend={PLACEHOLDER_INPUT_LABEL}>
                                {PLACEHOLDER_INPUT_OPTIONS.map((option) => (
                                    <Checkbox value={option}>{option}</Checkbox>
                                ))}
                            </CheckboxGroup>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion>

            <PropsCard>
                <HStack gap="24">
                    <RadioGroup legend="size" value={size} onChange={setSize}>
                        {["small", "medium", "large"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                    <RadioGroup legend="indent" value={indent} onChange={setIndent}>
                        <Radio value={true}>true</Radio>
                        <Radio value={false}>false</Radio>
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
};

export default AccordionExample;
