import Layout from "../examples/Layout";
import { GlobalAlert, HStack, Radio, RadioGroup } from "@navikt/ds-react";
import { PLACEHOLDER_HEADING, PLACEHOLDER_PARAGRAPH } from "@/examples/placeholders";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";

const GlobalAlertExample = () => {
    const [status, setStatus] = useState("announcement");
    const [size, setSize] = useState("medium");
    const [showCloseButton, setShowCloseButton] = useState(false);

    return (
        <Layout title="GlobalAlert">
            <GlobalAlert status={status} size={size}>
                <GlobalAlert.Header>
                    <GlobalAlert.Title>{PLACEHOLDER_HEADING}</GlobalAlert.Title>
                    {showCloseButton && <GlobalAlert.CloseButton onClick={() => alert("Lukket alert")} />}
                </GlobalAlert.Header>
                <GlobalAlert.Content>{PLACEHOLDER_PARAGRAPH}</GlobalAlert.Content>
            </GlobalAlert>

            <PropsCard>
                <HStack gap="space-24">
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
            </PropsCard>
        </Layout>
    );
};

export default GlobalAlertExample;
