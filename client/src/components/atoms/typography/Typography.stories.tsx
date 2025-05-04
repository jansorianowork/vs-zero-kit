import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  args: {
    children: "Typography Example",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "blockquote",
        "code",
        "lead",
        "large",
        "small",
        "muted",
      ],
    },
    as: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "blockquote",
        "code",
        "span",
        "div",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const Paragraph: Story = {
  args: {
    variant: "p",
    children: "This is a paragraph of text. It demonstrates the paragraph styling with proper line height and text size.",
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children: "This is a lead paragraph that stands out from regular text.",
  },
};

export const Blockquote: Story = {
  args: {
    variant: "blockquote",
    children: "This is a blockquote that can be used to highlight important information or quotes.",
  },
};

export const Code: Story = {
  args: {
    variant: "code",
    children: "const example = 'This is code styling';",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
    children: "Large text for emphasis",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "Small text for less important information",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Muted text for secondary information",
  },
};

export const CustomElement: Story = {
  args: {
    variant: "p",
    as: "span",
    children: "Paragraph styling rendered as a span element",
  },
};
