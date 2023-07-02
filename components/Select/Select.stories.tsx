import type { Meta, StoryObj } from "@storybook/react";
import { MonsterSize } from "utilities/monster-filters";
import { Select as SelectComponent } from ".";

const meta: Meta<typeof SelectComponent> = {
  title: "Select",
  component: SelectComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SelectComponent>;

export const Select: Story = {
  args: {
    required: false,
    label: "Monster size",
    name: "monster-size",

    options: MonsterSize,
  },
};
