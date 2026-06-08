import { BodyLong, HStack, Link, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "@/examples/Layout";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";

export default function LinkExample() {
    const [variant, setVariant] = useState<"accent" | "neutral">("accent");
    return (
        <Layout title="Link">
            <BodyLong spacing>
                Officia incididunt Culpa sit aute est duis minim in in voluptate velit Incididunt laborum nisi nisi
                Lorem vofficia sit aute est duis minim adipisicing non veniam culpa sit aute est duis{" "}
                <Link data-color={variant} inlineText href="/">
                    dette er en ganske lang lenke som brekker til flere linjer ved behov
                </Link>{" "}
                minim in in voluptate velit Incididunt laborum nisi nisi Lorem officia adipisicing non veniam occaecat
                commodo id ad aliquip.
            </BodyLong>

            <BodyLong>
                <Link href="#" data-color={variant}>
                    Vaffeloppskrift
                </Link>
            </BodyLong>

            <PropsCard>
                <HStack gap="space-24">
                    <RadioGroup legend="variant" value={variant} onChange={setVariant}>
                        {["accent", "neutral"].map((option) => (
                            <Radio value={option}>{option}</Radio>
                        ))}
                    </RadioGroup>
                </HStack>
            </PropsCard>
        </Layout>
    );
}
