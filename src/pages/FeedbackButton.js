import Layout from "../examples/Layout";
import { FaceSmileIcon } from "@navikt/aksel-icons";
import { FeedbackButton } from "@navikt/arbeidsplassen-react";
import { HStack } from "@navikt/ds-react";

const FeedbackButtonExample = () => {
    return (
        <Layout title="FeedbackButton">
            <HStack gap="8">
                <FeedbackButton icon={<FaceSmileIcon aria-hidden="true" height="1.5rem" width="1.5rem" />}>
                    Ja
                </FeedbackButton>
            </HStack>
        </Layout>
    );
};

export default FeedbackButtonExample;
