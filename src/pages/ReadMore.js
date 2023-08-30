import { Heading, ReadMore } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const Template = ({ title, ...args }) => {
  return (
    <div className="mb-2">
      <Heading size="medium" level="2" spacing>
        {title}
      </Heading>
      <ReadMore {...args}>
        Velg superrask søknad når dere registrerer en stillingsannonse.
        Spesifiser hvilke kvalifikasjoner dere har behov for. Jobbsøkerne svarer
        på hvilke kvalifikasjoner de oppfyller, og begrunner kort hvorfor de er
        rett person for jobben.
      </ReadMore>
    </div>
  );
};

const ReadMoreExample = () => {
  return (
    <Layout title="ReadMore">
      <Template header="Slik fungerer det" title="Standard size" />
      <Template header="Slik fungerer det" size="small" title="Small" />
    </Layout>
  );
};

export default ReadMoreExample;
