import Layout from "../examples/Layout";
import { LoginPage } from "@navikt/arbeidsplassen-react";

const LoginPageExample = () => {
  return (
    <Layout title="Logg inn">
      <LoginPage link="https://arbeidsplassen.nav.no" />
    </Layout>
  );
};

export default LoginPageExample;
