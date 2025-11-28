import Layout from "../examples/Layout";
import { LoginPage } from "@navikt/arbeidsplassen-react";

const LoginPageExample = () => {
    return (
        <Layout title="LoginPage">
            <LoginPage link="https://arbeidsplassen.nav.no" />
        </Layout>
    );
};

export default LoginPageExample;
