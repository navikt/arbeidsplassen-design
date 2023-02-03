import { ReadMore } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import Code from "../examples/Code";

const Template = ({ ...args }) => {
  return (
    <div className="mb-2">
      <ReadMore {...args}>
        Velg superrask søknad når dere registrerer en stillingsannonse.
        Spesifiser hvilke kvalifikasjoner dere har behov for. Jobbsøkerne svarer
        på hvilke kvalifikasjoner de oppfyller, og begrunner kort hvorfor de er
        rett person for jobben.
      </ReadMore>
      <Code as="ReadMore" attributes={args} />
    </div>
  );
};

const ReadMoreExample = () => {
  return (
    <Layout title="ReadMore">
      <Template header="Slik fungerer det" />
      <Template header="Slik fungerer det" size="small" />
    </Layout>
  );
};

export default ReadMoreExample;
