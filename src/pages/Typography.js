import Layout from "../examples/Layout";
import { BodyLong, BodyShort, Heading, Label, List } from "@navikt/ds-react";

export default function TypographyPage() {
  return (
    <Layout>
      <section className="mb-16">
        <Heading size="xlarge" level="2" spacing>
          Om Arbeidsplassen
        </Heading>
        <BodyLong size="large" spacing>
          Arbeidsplassen.no er en åpen møteplass for alle på arbeidsmarkedet.
          Vårt mål er at arbeidsmarkedet skal være så oversiktlig som mulig for
          alle, enten du er på jakt etter en jobb eller leter etter en kandidat.
        </BodyLong>

        <BodyLong spacing>
          Alle jobbsøkere, arbeidsgivere, vikar- og bemanningsbyråer og andre
          stillingsaktører er velkommen til arbeidsplassen.no. Hensikten er at
          jobbsøkere på jakt etter jobb, og bedrifter på jakt etter kandidater
          skal kunne oppdage og komme i kontakt med hverandre, så enkelt som
          mulig. Alle tjenestene er derfor kostnadsfrie.
        </BodyLong>

        <Heading size="large" level="2" spacing>
          Seksjonstittel
        </Heading>
        <BodyLong spacing>
          Slightly domed and divided by arches into stiff sections. The bedding
          was hardly able to cover it and seemed ready to slide off any moment.
        </BodyLong>

        <Heading size="medium" level="3" spacing>
          Undertittel
        </Heading>
        <BodyLong spacing>
          If he lifted his head a little he could see his brown belly, slightly
          domed and divided by arches into stiff sections. The bedding was
          hardly able to cover it and seemed ready to slide off any moment.
        </BodyLong>
        <Heading size="small" level="4" spacing>
          Small subtitle
        </Heading>
        <BodyLong spacing>
          Slightly domed and divided by arches into stiff sections. The bedding
          was hardly able to cover it and seemed ready to slide off any moment.
        </BodyLong>
        <Heading size="xsmall" level="5" spacing>
          XSmall subtitle
        </Heading>
        <BodyLong spacing>
          Slightly domed and divided by arches into stiff sections. The bedding
          was hardly able to cover it and seemed ready to slide off any moment.
        </BodyLong>

        <Heading size="medium" level="3" spacing>
          BodyLong small
        </Heading>
        <BodyLong spacing size="small">
          Slightly domed and divided by arches into stiff sections. The bedding
          was hardly able to cover it and seemed ready to slide off any moment.
        </BodyLong>

        <Heading size="medium" level="3" spacing>
          BodyShort small
        </Heading>
        <BodyShort spacing size="small">
          Slightly domed and divided by arches into stiff sections. The bedding
          was hardly able to cover it and seemed ready to slide off any moment.
        </BodyShort>

        <Heading size="medium" level="3" spacing>
          BodyLong large
        </Heading>
        <BodyLong spacing size="large">
          Slightly domed and divided by arches into stiff sections. The bedding
          was hardly able to cover it and seemed ready to slide off any moment.
        </BodyLong>

        <Heading size="medium" level="3" spacing>
          BodyShort large
        </Heading>
        <BodyShort spacing size="large">
          Slightly domed and divided by arches into stiff sections. The bedding
          was hardly able to cover it and seemed ready to slide off any moment.
        </BodyShort>

        <Heading size="medium" level="3" spacing>
          Label
        </Heading>
        <Label spacing>
          Slightly domed and divided by arches into stiff sections.
        </Label>

        <Heading size="medium" level="3" spacing>
          List
        </Heading>
        <List>
          <List.Item>Du søker kun med relevant informasjon fo</List.Item>
          <List.Item>Slightly domed and divided by arches</List.Item>
          <List.Item>If he lifted his head a little</List.Item>
        </List>
      </section>
    </Layout>
  );
}
