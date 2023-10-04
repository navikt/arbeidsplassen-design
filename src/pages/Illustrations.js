import { HStack } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import {
  ConfusedGrape,
  StrawberryWithKey,
  WavingGrape,
  GrapeAndStrawberryClappingHands,
  GrapeAndPapayaTogether,
} from "../packages/arbeidsplassen-react/illustrations";

const IllustrationsExample = () => {
  return (
    <Layout title="Illustrations">
      <HStack gap="20" align="end">
        <ConfusedGrape />
        <StrawberryWithKey />
        <WavingGrape />
        <GrapeAndPapayaTogether />
        <GrapeAndStrawberryClappingHands />
      </HStack>
    </Layout>
  );
};

export default IllustrationsExample;
