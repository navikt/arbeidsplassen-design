import { HelpText } from "@navikt/ds-react";
import Layout from "@/examples/Layout";

export default function HelpTextExample() {
    return (
        <Layout title="HelpText">
            <HelpText title="Hvor kommer dette fra?">Informasjonen er hentet fra X sin statistikk fra 2021</HelpText>
        </Layout>
    );
}
