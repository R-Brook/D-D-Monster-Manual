import type { Meta, StoryObj } from "@storybook/react";
import { PaginationProvider } from "context/pagination/paginationContext";
import { Pagination as PaginationComponent } from ".";

const meta: Meta<typeof PaginationComponent> = {
  title: "Pagination",
  component: PaginationComponent,
  decorators: [
    (Story) => (
      <PaginationProvider>
        <Story />
      </PaginationProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PaginationComponent>;

export const Pagination: Story = {};
