import Layout from "../examples/Layout";
import { List } from "@navikt/ds-react";
import { PLACEHOLDER_BLOCK, PLACEHOLDER_PARAGRAPH } from "@/examples/placeholders";

export default function ListExamplePage() {
    return (
        <Layout title="List">
            <List>
                <List.Item>{PLACEHOLDER_PARAGRAPH}</List.Item>
                <List.Item>{PLACEHOLDER_PARAGRAPH}</List.Item>
                <List.Item>{PLACEHOLDER_BLOCK}</List.Item>
            </List>
        </Layout>
    );
}
