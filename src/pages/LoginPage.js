import Layout from "../examples/Layout";
import LoginPage from "@navikt/arbeidsplassen-react/LoginPage/LoginPage";

const LoginPageExample = () => {
  return (
    <Layout title="Logg inn">
      <LoginPage link="https://arbeidsplassen.nav.no" />
    </Layout>
  );
};

export default LoginPageExample;
