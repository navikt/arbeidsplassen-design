import Layout from "../examples/Layout";
import { GlobalAlert, Heading, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import { LOREM_IPSUM_HEADING, LOREM_IPSUM_PARAGRAPH } from "@/examples/loremIpsum";
import { useState } from "react";

const GlobalAlertExample = () => {
    const [status, setStatus] = useState("announcement");
    const [size, setSize] = useState("medium");
    const [showCloseButton, setShowCloseButton] = useState(false);

    return (
        <Layout title="GlobalAlert">
            <GlobalAlert status={status} size={size}>
                <GlobalAlert.Header>
                    <GlobalAlert.Title>{LOREM_IPSUM_HEADING}</GlobalAlert.Title>
                    {showCloseButton && <GlobalAlert.CloseButton onClick={() => alert("Lukket alert")} />}
                </GlobalAlert.Header>
                <GlobalAlert.Content>{LOREM_IPSUM_PARAGRAPH}</GlobalAlert.Content>
            </GlobalAlert>

            <Heading size="medium" level="2" spacing className="mt-24">
                Props
            </Heading>
            <HStack gap="24">
                <RadioGroup legend="status" value={status} onChange={setStatus}>
                    {["announcement", "success", "warning", "error"].map((option) => (
                        <Radio value={option}>{option}</Radio>
                    ))}
                </RadioGroup>
                <RadioGroup legend="size" value={size} onChange={setSize}>
                    {["medium", "small"].map((option) => (
                        <Radio value={option}>{option}</Radio>
                    ))}
                </RadioGroup>
                <RadioGroup legend="closeButton" value={showCloseButton} onChange={setShowCloseButton}>
                    <Radio value={false}>false</Radio>
                    <Radio value={true}>true</Radio>
                </RadioGroup>
            </HStack>
        </Layout>
    );
};

export default GlobalAlertExample;
