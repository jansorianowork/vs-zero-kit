import { Meta, StoryObj } from "@storybook/react";
import { FormGroup } from "./FormGroup";

const meta: Meta<typeof FormGroup> = {
  title: "Molecules/FormGroup",
  component: FormGroup,
  args: {
    id: "example",
    label: "Form Field",
    placeholder: "Enter a value...",
  },
  argTypes: {
    error: { control: "text" },
    helpText: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {};

export const WithHelpText: Story = {
  args: {
    helpText: "This is a helpful description for this field.",
  },
};

export const WithError: Story = {
  args: {
    error: "This field is required.",
    value: "",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled input",
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: "Required Field",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password...",
  },
};

export const Email: Story = {
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "Enter email...",
  },
};

export const WithValue: Story = {
  args: {
    label: "Username",
    value: "johndoe",
  },
};
