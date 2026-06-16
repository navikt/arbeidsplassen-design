import type { Meta, StoryObj } from "@storybook/react";
import { HStack } from "@navikt/ds-react";
import {
    CelebratingFigure,
    ConfusedFigure,
    FigureHoldingAHeart,
    FigureJugglingShieldWithCheckmark,
    FiguresGivingHighFive,
    FiguresSideBySide,
    FigureWithEnvelope,
    FigureWithKey,
    FigureWithMagnifier,
    WavingFigure,
    WorriedFigure,
} from "@navikt/arbeidsplassen-react";

const meta = {
    title: "Arbeidsplassen/Illustrations",
    tags: [],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <HStack gap="space-20" align="end">
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
            <FigureWithEnvelope />
        </HStack>
    ),
};
