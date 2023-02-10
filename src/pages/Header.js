import Layout from "../examples/Layout";
import { Header } from "../packages/arbeidsplassen-react";

export default function HeaderPage() {
  return (
    <Layout size="full-width" headerOffset>
      <Header
        authenticationStatus="is-authenticated"
        userName="Espen Askeladd"
        variant="person"
        active="ledige-stillinger"
      />
    </Layout>
  );
}
