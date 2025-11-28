import { Button, Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { TrashIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";

function ButtonTemplate({ variant, size }) {
    return (
        <div className="mb-10">
            <Heading size="small" level="2" spacing>
                {variant}
            </Heading>
            <HStack gap="4">
                <Button variant={variant} size={size}>
                    Button
                </Button>
                <Button variant={variant} size={size} icon={<TrashIcon />}>
                    Button
                </Button>
                <Button variant={variant} size={size} icon={<TrashIcon />} disabled>
                    Disabled
                </Button>
                <Button variant={variant} size={size} loading>
                    Laster
                </Button>
            </HStack>
        </div>
    );
}

const ButtonExample = () => {
    const [size, setSize] = useState("medium");

    return (
        <Layout title="Button">
            <ButtonTemplate variant="primary" size={size} />
            <ButtonTemplate variant="primary-neutral" size={size} />
            <ButtonTemplate variant="secondary" size={size} />
            <ButtonTemplate variant="secondary-neutral" size={size} />
            <ButtonTemplate variant="tertiary" size={size} />
            <ButtonTemplate variant="tertiary-neutral" size={size} />
            <ButtonTemplate variant="danger" size={size} />

            <PropsCard>
                <HStack gap="24">
                    <RadioGroup legend="size" value={size} onChange={setSize}>
                        {["medium", "small", "xsmall"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
};

export default ButtonExample;
