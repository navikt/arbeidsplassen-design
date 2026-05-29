import Layout from "@/examples/Layout";
import { LoginPage } from "@navikt/arbeidsplassen-react";

export default function LoginPageExample() {
    return (
        <Layout title="LoginPage">
            <LoginPage link="https://arbeidsplassen.nav.no" />
        </Layout>
    );
}
