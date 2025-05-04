import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { Home, FileText, Settings, Users, Package, Globe, LayoutGrid, Box, BarChart, ShoppingCart, FileCode, Palette } from "lucide-react";

const meta: Meta<typeof Sidebar> = {
  title: "Layouts/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <div className="rounded-md bg-primary/10 p-1.5">
          <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3 6h18M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </div>
        <h2 className="text-lg font-semibold">vs-zero-kit</h2>
      </div>
    ),
    version: "0.1.0",
    navSections: [
      {
        title: "Documentation",
        items: [
          { label: "Introduction", icon: Home, isActive: true },
          { label: "Installation", icon: FileText },
          { label: "Theming", icon: Palette }
        ]
      },
      {
        title: "Atoms",
        items: [
          { label: "Button", icon: Box },
          { label: "Input", icon: FileCode },
          { label: "Badge", icon: Box },
          { label: "Icon", icon: Box },
          { label: "Typography", icon: FileText }
        ]
      },
      {
        title: "Molecules",
        items: [
          { label: "Card", icon: LayoutGrid },
          { label: "Form Group", icon: Box },
          { label: "Navigation Item", icon: Globe },
          { label: "Tabs", icon: Box }
        ]
      },
      {
        title: "Components",
        items: [
          { label: "Alert Dialog", icon: Box },
          { label: "Dropdown Menu", icon: Box },
          { label: "Modal", icon: Box },
          { label: "Toast", icon: Box }
        ]
      }
    ],
    footer: (
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="h-8 w-8 rounded-md inline-flex items-center justify-center hover:bg-secondary">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
          <button className="h-8 w-8 rounded-md inline-flex items-center justify-center text-primary bg-primary/10">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </button>
        </div>
        <div className="text-xs text-muted-foreground">
          <span>Powered by </span>
          <span className="font-semibold">shadcn</span>
        </div>
      </div>
    )
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

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
        <div className="rounded-md bg-primary/10 p-1.5">
          <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3 6h18M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </div>
        <h2 className="text-lg font-semibold">vs-zero-kit</h2>
      </div>
    ),
    version: "0.1.0",
    navSections: [
      {
        title: "Navigation",
        items: [
          { label: "Dashboard", icon: LayoutGrid, isActive: true },
          { label: "Products", icon: Package },
          { label: "Customers", icon: Users },
          { label: "Orders", icon: ShoppingCart },
          { label: "Analytics", icon: BarChart },
          { label: "Settings", icon: Settings, hasDivider: true }
        ]
      }
    ],
    footer: (
      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary/10">
              <svg className="h-8 w-8 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Jane Smith</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
          </div>
        </div>
        <button className="h-8 w-8 rounded-md inline-flex items-center justify-center hover:bg-secondary">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    )
  }
};
