import { Chips, Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";
import { PLACEHOLDER_INPUT_OPTIONS } from "@/examples/placeholders";
import Layout from "@/examples/Layout";

type DataColor = "neutral" | "accent";

export default function ChipsExample() {
    const options = PLACEHOLDER_INPUT_OPTIONS;

    const [selected, setSelected] = useState<string[]>(["Brød"]);
    const [filter, setFilter] = useState<string[]>(options);

    const [variant, setVariant] = useState<DataColor>("accent");
    const [size, setSize] = useState<"small" | "medium">("medium");
    const [checkmark, setCheckmark] = useState(true);

    return (
        <Layout title="Chips">
            <div className="mb-16">
                <Heading size="medium" level="2" spacing>
                    Chips.Toggle
                </Heading>
                <Chips size={size}>
                    {options.map((c) => (
                        <Chips.Toggle
                            data-color={variant}
                            checkmark={checkmark}
                            selected={selected.includes(c)}
                            key={c}
                            onClick={() =>
                                setSelected(selected.includes(c) ? selected.filter((x) => x !== c) : [...selected, c])
                            }
                        >
                            {c}
                        </Chips.Toggle>
                    ))}
                </Chips>
            </div>
            <div className="mb-16">
                <Heading size="medium" level="2" spacing>
                    Chips.Removable
                </Heading>
                <Chips size={size}>
                    {filter.map((c) => (
                        <Chips.Removable
                            data-color={variant}
                            key={c}
                            onClick={() => setFilter((x) => (x.length === 1 ? options : x.filter((y) => y !== c)))}
                        >
                            {c}
                        </Chips.Removable>
                    ))}
                </Chips>
            </div>

            <PropsCard>
                <HStack gap="space-24">
                    <RadioGroup legend="variant" value={variant} onChange={setVariant}>
                        {["accent", "neutral"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                    <RadioGroup legend="size" value={size} onChange={setSize}>
                        {["medium", "small"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                    <RadioGroup legend="checkmark" value={checkmark} onChange={setCheckmark}>
                        <Radio value={true}>true</Radio>
                        <Radio value={false}>false</Radio>
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
}
