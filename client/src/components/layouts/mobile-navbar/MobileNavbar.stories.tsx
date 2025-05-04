import { Meta, StoryObj } from "@storybook/react";
import { MobileNavbar } from "./MobileNavbar";
import { NavigationItem } from "@/components/molecules/navigation-item/NavigationItem";
import { Home, FileText, Settings, Users, Package, Globe, Box, LayoutGrid } from "lucide-react";

const meta: Meta<typeof MobileNavbar> = {
  title: "Layouts/MobileNavbar",
  component: MobileNavbar,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <div className="rounded-md bg-primary/10 p-1">
          <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3 6h18M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </div>
        <h2 className="text-base font-semibold">vs-zero-kit</h2>
      </div>
    ),
    navContent: (
      <div className="p-4 space-y-6">
        <div>
          <div className="mb-2 px-2">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Documentation</h3>
          </div>
          <div className="space-y-1">
            <NavigationItem icon={Home} isActive>Introduction</NavigationItem>
            <NavigationItem icon={FileText}>Installation</NavigationItem>
            <NavigationItem icon={Globe}>Theming</NavigationItem>
          </div>
        </div>
        
        <div>
          <div className="mb-2 px-2">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Atoms</h3>
          </div>
          <div className="space-y-1">
            <NavigationItem icon={Box}>Button</NavigationItem>
            <NavigationItem icon={Box}>Input</NavigationItem>
            <NavigationItem icon={Box}>Badge</NavigationItem>
            <NavigationItem icon={Box}>Icon</NavigationItem>
            <NavigationItem icon={FileText}>Typography</NavigationItem>
          </div>
        </div>
        
        <div>
          <div className="mb-2 px-2">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Molecules</h3>
          </div>
          <div className="space-y-1">
            <NavigationItem icon={LayoutGrid}>Card</NavigationItem>
            <NavigationItem icon={Box}>Form Group</NavigationItem>
            <NavigationItem icon={Globe}>Navigation Item</NavigationItem>
            <NavigationItem icon={Box}>Tabs</NavigationItem>
          </div>
        </div>
        
        <div>
          <div className="mb-2 px-2">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Components</h3>
          </div>
          <div className="space-y-1">
            <NavigationItem icon={Box}>Alert Dialog</NavigationItem>
            <NavigationItem icon={Box}>Dropdown Menu</NavigationItem>
            <NavigationItem icon={Box}>Modal</NavigationItem>
            <NavigationItem icon={Box}>Toast</NavigationItem>
          </div>
        </div>
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof MobileNavbar>;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    theme: 'dark'
  }
};

export const Simplified: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <div className="rounded-md bg-primary/10 p-1">
          <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3 6h18M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </div>
        <h2 className="text-base font-semibold">App</h2>
      </div>
    ),
    navContent: (
      <div className="p-4 space-y-1">
        <NavigationItem icon={Home} isActive>Dashboard</NavigationItem>
        <NavigationItem icon={Package}>Products</NavigationItem>
        <NavigationItem icon={Users}>Customers</NavigationItem>
        <NavigationItem icon={Box}>Orders</NavigationItem>
        <NavigationItem icon={LayoutGrid}>Analytics</NavigationItem>
        <NavigationItem icon={Settings} hasDivider>Settings</NavigationItem>
      </div>
    ),
  }
};
