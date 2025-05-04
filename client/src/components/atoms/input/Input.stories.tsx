import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
  },
  argTypes: {
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search"],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Default input",
  },
};

export const WithValue: Story = {
  args: {
    value: "Input with value",
  },
};

export const WithError: Story = {
  args: {
    error: true,
    placeholder: "Input with error",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password input",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Number input",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search input",
  },
};
