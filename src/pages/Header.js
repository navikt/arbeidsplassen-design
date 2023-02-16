import Layout from "../examples/Layout";
import { Header } from "../packages/arbeidsplassen-react";

export default function HeaderPage() {
  return (
    <Layout size="full-width">
      <Header
        authenticationStatus="is-authenticated"
        userName="Espen Askeladd"
        variant="person"
        active="ledige-stillinger"
        onLogin={() => {}}
        onLogout={() => {}}
      />
      <Header
        authenticationStatus="is-authenticated"
        variant="company"
        active="stillingsannonser"
        onLogin={() => {}}
        onLogout={() => {}}
      />
      <Header
        authenticationStatus="is-authenticated"
        companyName="Matbutikken på hjørnet AS"
        variant="company"
        active="stillingsannonser"
        showChangeCompany
        onChangeCompanyClick={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />
    </Layout>
  );
}
