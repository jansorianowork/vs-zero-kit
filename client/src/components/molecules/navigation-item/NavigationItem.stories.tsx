import { Meta, StoryObj } from "@storybook/react";
import { NavigationItem } from "./NavigationItem";
import { Home, Settings, FileText, Users, ShoppingCart, Calendar, Bell } from "lucide-react";

const meta: Meta<typeof NavigationItem> = {
  title: "Molecules/NavigationItem",
  component: NavigationItem,
  args: {
    children: "Navigation Item",
  },
  argTypes: {
    icon: { control: false },
    isActive: { control: "boolean" },
    hasDivider: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => (
      <div className="w-56 p-2 border rounded-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavigationItem>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: Home,
    children: "Home",
  },
};

export const Active: Story = {
  args: {
    icon: Home,
    children: "Home",
    isActive: true,
  },
};

export const WithDivider: Story = {
  args: {
    icon: Settings,
    children: "Settings",
    hasDivider: true,
  },
};

export const NavigationGroup: Story = {
  render: () => (
    <div className="w-56 border rounded-md p-2">
      <div className="mb-2 px-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Main Menu</h3>
      </div>
      <NavigationItem icon={Home} isActive>Dashboard</NavigationItem>
      <NavigationItem icon={Users}>Users</NavigationItem>
      <NavigationItem icon={ShoppingCart}>Products</NavigationItem>
      <NavigationItem icon={Calendar}>Calendar</NavigationItem>
      <NavigationItem icon={FileText}>Reports</NavigationItem>
      <NavigationItem icon={Bell} hasDivider>Notifications</NavigationItem>
      <NavigationItem icon={Settings}>Settings</NavigationItem>
    </div>
  ),
};
