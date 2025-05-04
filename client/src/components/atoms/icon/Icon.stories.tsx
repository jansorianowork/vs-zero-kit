import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { Home, Settings, User, Bell, Package, Search, Mail } from "lucide-react";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    name: { 
      control: { disable: true } 
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    color: { control: "color" },
    strokeWidth: { control: { type: "range", min: 1, max: 3, step: 0.1 } },
  },
  args: {
    size: "md",
    strokeWidth: 2,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const HomeIcon: Story = {
  args: {
    name: Home,
  },
};

export const SettingsIcon: Story = {
  args: {
    name: Settings,
  },
};

export const UserIcon: Story = {
  args: {
    name: User,
  },
};

export const BellIcon: Story = {
  args: {
    name: Bell,
  },
};

export const PackageIcon: Story = {
  args: {
    name: Package,
  },
};

export const SmallIcon: Story = {
  args: {
    name: Search,
    size: "sm",
  },
};

export const LargeIcon: Story = {
  args: {
    name: Mail,
    size: "lg",
  },
};

export const ExtraLargeIcon: Story = {
  args: {
    name: Bell,
    size: "xl",
  },
};

export const ColoredIcon: Story = {
  args: {
    name: Home,
    size: "lg",
    className: "text-primary",
  },
};

export const ThinStrokeIcon: Story = {
  args: {
    name: User,
    strokeWidth: 1,
  },
};

export const ThickStrokeIcon: Story = {
  args: {
    name: Settings,
    strokeWidth: 3,
  },
};
