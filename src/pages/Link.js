import { BodyLong, Heading, HStack, Link, Radio, RadioGroup } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { useState } from "react";

const LinkExample = () => {
    const [variant, setVariant] = useState("action");
    return (
        <Layout title="Link">
            <BodyLong spacing>
                Officia incididunt Culpa sit aute est duis minim in in voluptate velit Incididunt laborum nisi nisi
                Lorem vofficia sit aute est duis minim adipisicing non veniam culpa sit aute est duis{" "}
                <Link variant={variant} inlineText href="/">
                    dette er en ganske lang lenke som brekker til flere linjer ved behov
                </Link>{" "}
                minim in in voluptate velit Incididunt laborum nisi nisi Lorem officia adipisicing non veniam occaecat
                commodo id ad aliquip.
            </BodyLong>

            <BodyLong>
                <Link href="#" variant={variant}>
                    Vaffeloppskrift
                </Link>
            </BodyLong>

            <Heading size="medium" level="2" spacing className="mt-24">
                Props
            </Heading>
            <HStack gap="24">
                <RadioGroup legend="variant" value={variant} onChange={setVariant}>
                    {["action", "neutral", "subtle"].map((option) => (
                        <Radio value={option}>{option}</Radio>
                    ))}
                </RadioGroup>
            </HStack>
        </Layout>
    );
};

export default LinkExample;
