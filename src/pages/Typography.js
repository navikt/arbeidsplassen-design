import Layout from "../examples/Layout";
import { BodyLong, Heading, List } from "@navikt/ds-react";
import { PLACEHOLDER_BLOCK, PLACEHOLDER_HEADING, PLACEHOLDER_PARAGRAPH } from "@/examples/placeholders";

export default function TypographyPage() {
    return (
        <Layout>
            <section className="mb-16">
                <Heading size="xlarge" level="2" spacing>
                    {PLACEHOLDER_HEADING}
                </Heading>
                <BodyLong size="large" spacing>
                    {PLACEHOLDER_BLOCK}
                </BodyLong>

                <BodyLong spacing>{PLACEHOLDER_BLOCK}</BodyLong>

                <Heading size="large" level="2" spacing>
                    {PLACEHOLDER_HEADING}
                </Heading>
                <BodyLong spacing>{PLACEHOLDER_BLOCK}</BodyLong>

                <Heading size="medium" level="3" spacing>
                    {PLACEHOLDER_HEADING}
                </Heading>
                <BodyLong spacing>{PLACEHOLDER_PARAGRAPH}</BodyLong>

                <List>
                    <List.Item>{PLACEHOLDER_PARAGRAPH}</List.Item>
                    <List.Item>{PLACEHOLDER_PARAGRAPH}</List.Item>
                    <List.Item>{PLACEHOLDER_BLOCK}</List.Item>
                </List>
            </section>
        </Layout>
    );
}
