import Layout from "../examples/Layout";
import { RichText } from "@navikt/arbeidsplassen-react";

const RichTextExample = () => {
  return (
    <Layout title="RichText">
      <RichText>
        <h1>Heading 1</h1>
        <h2>Heading 1</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Du søker kun med relevant informasjon for stillingen og kan når som
          helst trekke tilbake din <b>søknad</b> og{" "}
          <strong>informasjonen</strong> du har oppgitt.
        </p>

        <p>
          Du søker kun med relevant informasjon for stillingen og kan når som
          helst <a href="#">trekke tilbake din søknad</a>
        </p>

        <ul>
          <li>Du søker kun med relevant informasjon fo</li>
          <li>Slightly domed and divided by arches</li>
          <li>If he lifted his head a little</li>
        </ul>
      </RichText>
    </Layout>
  );
};

export default RichTextExample;
