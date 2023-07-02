import type { Meta, StoryObj } from "@storybook/react";
import { SelectedFilter as SelectedFilterComponent } from ".";

const meta: Meta<typeof SelectedFilterComponent> = {
  title: "SelectedFilter",
  component: SelectedFilterComponent,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SelectedFilterComponent>;

export const SelectedFilter: Story = {
  args: {
    label: "Monster size",
    selected_value: "LARGE",
  },
};
