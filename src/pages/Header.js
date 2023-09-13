import Layout from "../examples/Layout";
import { Header } from "../packages/arbeidsplassen-react";
import { Radio, RadioGroup, Select, TextField } from "@navikt/ds-react";
import { useState } from "react";

export default function HeaderPage() {
  const [variant, setVariant] = useState("person");
  const [showChangeCompany, setShowChangeCompany] = useState(false);
  const [userName, setUserName] = useState("Navn Navnesen");
  const [active, setActive] = useState("ledige-stillinger");
  const [companyName, setCompanyName] = useState("Firmanavn AS");
  const [authenticationStatus, setAuthenticationStatus] =
    useState("is-authenticated");

  return (
    <Layout
      headerArgs={{
        variant,
        authenticationStatus,
        showChangeCompany,
        userName,
        companyName,
        active,
        onLogin: console.log,
        onLogout: console.log,
      }}
    >
      <RadioGroup
        legend="variant"
        value={variant}
        onChange={(val) => setVariant(val)}
        className="mb-8"
      >
        <Radio value="person">person</Radio>
        <Radio value="company">company</Radio>
        <Radio value="all">all</Radio>
      </RadioGroup>

      <RadioGroup
        legend="authenticationStatus"
        value={authenticationStatus}
        onChange={(val) => setAuthenticationStatus(val)}
        className="mb-8"
      >
        <Radio value="unknown">unknown</Radio>
        <Radio value="is-authenticated">is-authenticated</Radio>
        <Radio value="not-authenticated">not-authenticated</Radio>
      </RadioGroup>

      <Select
        label="active"
        value={active}
        onChange={(e) => setActive(e.target.value)}
        className="mb-8"
      >
        <option value="person">person</option>
        <option value="bedrift">bedrift</option>
        <option value="ledige-stillinger">ledige-stillinger</option>
        <option value="jobbtreff">jobbtreff</option>
        <option value="cv">cv</option>
        <option value="min-side">min-side</option>
        <option value="stillingsannonser">stillingsannonser</option>
        <option value="var-side">var-side</option>
        <option value="jobbtreff-bedrift">jobbtreff-bedrift</option>
      </Select>

      <RadioGroup
        legend="showChangeCompany"
        value={showChangeCompany}
        onChange={(val) => setShowChangeCompany(val)}
        className="mb-8"
      >
        <Radio value={false}>false</Radio>
        <Radio value={true}>true</Radio>
      </RadioGroup>

      <TextField
        label="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="mb-8"
      />

      <TextField
        label="companyName"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="mb-8"
      />
    </Layout>
  );
}
