import { LinkPanel } from "@navikt/ds-react";
import Layout from "@/examples/Layout";

interface TemplateProps {
    className?: string;
}

function Template({ className }: TemplateProps) {
    return (
        <div className="mb-8">
            <LinkPanel href="#" className={className}>
                <LinkPanel.Title>Møt en bedrift</LinkPanel.Title>
                <LinkPanel.Description>
                    Følg en direkte sending og bli kjent med bedriften og deres stillinger.
                </LinkPanel.Description>
            </LinkPanel>
        </div>
    );
}

export default function LinkPanelExample() {
    return (
        <Layout title="LinkPanel (avviklet)">
            <Template />
            <Template className="arb-link-panel-primary" />
            <Template className="arb-link-panel-secondary" />
            <Template className="arb-link-panel-tertiary" />
        </Layout>
    );
}
