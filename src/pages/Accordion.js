import { useState } from "react";
import { Accordion, Checkbox, CheckboxGroup, Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";

function AccordionTemplate({ title, size, indent }) {
    return (
        <div className="mb-8">
            <Heading size="medium" level="2" spacing>
                {title}
            </Heading>
            <Accordion size={size} indent={indent}>
                <Accordion.Item>
                    <Accordion.Header>Område</Accordion.Header>
                    <Accordion.Content>
                        <Yrke />
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>Yrke</Accordion.Header>
                    <Accordion.Content>
                        <Yrke />
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>Publisert</Accordion.Header>
                    <Accordion.Content>
                        <Yrke />
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

const Yrke = () => {
    const handleChange = (val) => console.log(val);

    return (
        <>
            <CheckboxGroup
                hideLegend
                legend="Velg arbeidssted"
                onChange={(val) => handleChange(val)}
                defaultValue={["Bakerst"]}
            >
                <Checkbox value="Fremst">Helse og sosial (5715)</Checkbox>
                <Checkbox value="Midterst">Utdanning (3037)</Checkbox>
                <Checkbox value="Bakerst">Salg og service (2635)</Checkbox>
                <Checkbox value="Fremst">Kontor og økonomi (2220)</Checkbox>
            </CheckboxGroup>
        </>
    );
};

const AccordionExample = () => {
    const [size, setSize] = useState("medium");
    const [indent, setIndent] = useState(true);
    return (
        <Layout title="Accordion">
            <AccordionTemplate title="Velg filter" size={size} indent={indent} />

            <Heading size="medium" level="2" spacing>
                Props
            </Heading>
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
        </Layout>
    );
};

export default AccordionExample;
