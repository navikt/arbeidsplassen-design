import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { FeedbackButton } from "@navikt/arbeidsplassen-react";
import { FaceSmileIcon } from "@navikt/aksel-icons";

const meta = {
    title: "Arbeidsplassen/FeedbackButton",
    component: FeedbackButton,
    tags: ["autodocs", "ai-generated"],
} satisfies Meta<typeof FeedbackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Ja",
        icon: <FaceSmileIcon aria-hidden height="1.5rem" width="1.5rem" />,
    },
    play: async ({ canvas, args }) => {
        const button = canvas.getByRole("button");
        await expect(button).toHaveTextContent(args.children as string);
    },
};
