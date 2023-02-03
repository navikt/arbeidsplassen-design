import { Textarea } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const TextareaExample = () => {
  return (
    <Layout title="Textarea">
      <Textarea label="Har du noen tilbakemeldinger?" maxLength={100} />
    </Layout>
  );
};

export default TextareaExample;
