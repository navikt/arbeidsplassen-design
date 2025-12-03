import { Button, Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { TrashIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";

const ButtonExample = () => {
    const [size, setSize] = useState("medium");
    const [variant, setVariant] = useState("primary");
    const [loading, setLoading] = useState(false);

    return (
        <Layout title="Button">
            <Button variant={variant} size={size} icon={<TrashIcon />} loading={loading}>
                Button
            </Button>

            <PropsCard>
                <HStack gap="24">
                    <RadioGroup legend="variant" value={variant} onChange={setVariant}>
                        {[
                            "primary",
                            "primary-neutral",
                            "secondary",
                            "secondary-neutral",
                            "tertiary",
                            "tertiary-neutral",
                            "danger",
                        ].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                    <RadioGroup legend="size" value={size} onChange={setSize}>
                        {["medium", "small", "xsmall"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                    <RadioGroup legend="loading" value={loading} onChange={setLoading}>
                        <Radio value={false}>false</Radio>
                        <Radio value={true}>true</Radio>
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
};

export default ButtonExample;
