import type { Meta, StoryObj } from "@storybook/react";
import { Card as CardComponent } from ".";

const meta: Meta<typeof CardComponent> = {
  title: "Card",
  component: CardComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CardComponent>;

export const Card: Story = {
  args: {
    name: "Owl",
    image: "/images/monsters/owl.jpg",
    type: "BEAST",
    size: "TINY",
    hit_points: 1,
    armor_class_value: 11,
  },
};
