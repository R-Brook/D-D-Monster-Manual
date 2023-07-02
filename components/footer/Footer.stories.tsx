import type { Meta, StoryObj } from "@storybook/react";
import { Footer as FooterComponent } from ".";

const meta: Meta<typeof FooterComponent> = {
  title: "Footer",
  component: FooterComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {};
