import { HStack } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import {
  CelebratingFigure,
  ConfusedFigure,
  FigureHoldingAHeart,
  FigureJugglingShieldWithCheckmark,
  FiguresGivingHighFive,
  FiguresSideBySide,
  FigureWithKey,
  FigureWithMagnifier,
  WavingFigure,
  WorriedFigure,
} from "../packages/arbeidsplassen-react/illustrations";

const IllustrationsExample = () => {
  return (
    <Layout title="Illustrations">
      <HStack gap="20" align="end">
        <CelebratingFigure />
        <ConfusedFigure />
        <FiguresGivingHighFive />
        <FiguresSideBySide />
        <FigureWithKey />
        <FigureWithMagnifier />
        <WavingFigure />
        <WorriedFigure />
        <FigureHoldingAHeart />
        <FigureJugglingShieldWithCheckmark />
      </HStack>
    </Layout>
  );
};

export default IllustrationsExample;
