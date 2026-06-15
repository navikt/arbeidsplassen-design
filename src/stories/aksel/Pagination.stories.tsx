import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@navikt/ds-react";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

const meta = {
    title: "Aksel/Pagination",
    component: Pagination,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select", options: ["xsmall", "small", "medium"] },
    },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        page: 1,
        count: 9,
        boundaryCount: 1,
        siblingCount: 1,
        prevNextTexts: true,
        size: "medium",
        onPageChange: fn(),
    },

    render: (args) => {
        const [, updateArgs] = useArgs();
        function pageChange(page: number) {
            updateArgs({ page });
            args.onPageChange?.(page);
        }
        return <Pagination {...args} onPageChange={pageChange} />;
    },
};
