import Layout from "../examples/Layout";
import { Radio, RadioGroup, Select } from "@navikt/ds-react";
import { useState } from "react";

export default function HeaderPage() {
  const [variant, setVariant] = useState("person");
  const [active, setActive] = useState("ledige-stillinger");
  const [authenticationStatus, setAuthenticationStatus] =
    useState("is-authenticated");

  return (
    <Layout
      headerArgs={{
        variant,
        authenticationStatus,
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
        <option value="ledige-stillinger">ledige-stillinger</option>
        <option value="cv">cv</option>
        <option value="stillingsannonser">stillingsannonser</option>
      </Select>
    </Layout>
  );
}
