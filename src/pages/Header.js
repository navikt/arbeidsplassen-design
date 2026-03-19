import Layout from "../examples/Layout";
import { BodyLong, Radio, RadioGroup, Select } from "@navikt/ds-react";
import { useState } from "react";
import PropsCard from "@/examples/PropsCard";

export default function HeaderPage() {
    const [variant, setVariant] = useState("person");
    const [active, setActive] = useState("ledige-stillinger");
    const [authenticationStatus, setAuthenticationStatus] = useState("is-authenticated");
    const [muligheterAccessStatus, setMuligheterAccessStatus] = useState("no-access");

    return (
        <Layout
            title="Header"
            headerArgs={{
                variant,
                authenticationStatus,
                muligheterAccessStatus,
                active,
                onLogin: console.log,
                onLogout: console.log,
            }}
        >
            <BodyLong>Header vises på topp av siden!</BodyLong>
            <PropsCard>
                <RadioGroup legend="variant" value={variant} onChange={(val) => setVariant(val)} className="mb-8">
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

                <RadioGroup
                    legend="muligheterAccessStatus"
                    value={muligheterAccessStatus}
                    onChange={(val) => setMuligheterAccessStatus(val)}
                    className="mb-8"
                >
                    <Radio value="has-access">has-access</Radio>
                    <Radio value="no-access">no-access</Radio>
                </RadioGroup>

                <Select label="active" value={active} onChange={(e) => setActive(e.target.value)} className="mb-8">
                    <option value="ledige-stillinger">ledige-stillinger</option>
                    <option value="ung">ung</option>
                    <option value="sommerjobb">sommerjobb</option>
                    <option value="stillingsannonser">stillingsannonser</option>
                    <option value="muligheter">muligheter</option>
                </Select>
            </PropsCard>
        </Layout>
    );
}
