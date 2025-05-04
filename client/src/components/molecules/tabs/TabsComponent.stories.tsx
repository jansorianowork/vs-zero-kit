import { Meta, StoryObj } from "@storybook/react";
import { TabsComponent } from "./TabsComponent";

const meta: Meta<typeof TabsComponent> = {
  title: "Molecules/Tabs",
  component: TabsComponent,
  args: {
    tabs: [
      {
        value: "tab1",
        label: "Account",
        content: (
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Account Settings</h3>
            <p className="text-muted-foreground">Manage your account settings and preferences.</p>
          </div>
        ),
      },
      {
        value: "tab2",
        label: "Password",
        content: (
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Password Settings</h3>
            <p className="text-muted-foreground">Update your password and security settings.</p>
          </div>
        ),
      },
      {
        value: "tab3",
        label: "Notifications",
        content: (
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Notification Preferences</h3>
            <p className="text-muted-foreground">Control how and when you receive notifications.</p>
          </div>
        ),
      },
      {
        value: "tab4",
        label: "Display",
        disabled: true,
        content: (
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Display Settings</h3>
            <p className="text-muted-foreground">This tab is disabled.</p>
          </div>
        ),
      },
    ],
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    defaultValue: {
      control: "select",
      options: ["tab1", "tab2", "tab3", "tab4"],
    },
    tabs: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof TabsComponent>;

export const Default: Story = {
  args: {
    defaultValue: "tab1",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};

export const CustomTabs: Story = {
  args: {
    tabs: [
      {
        value: "home",
        label: "Home",
        content: (
          <div className="p-4 bg-card rounded-md space-y-4">
            <h3 className="text-lg font-medium">Home Dashboard</h3>
            <p>Welcome to your dashboard. Here's an overview of your activity.</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary/10 rounded-md p-4">
                <div className="font-bold text-primary">235</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div className="bg-primary/10 rounded-md p-4">
                <div className="font-bold text-primary">48</div>
                <div className="text-sm text-muted-foreground">Comments</div>
              </div>
              <div className="bg-primary/10 rounded-md p-4">
                <div className="font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">New Users</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        value: "analytics",
        label: "Analytics",
        content: (
          <div className="p-4 bg-card rounded-md">
            <h3 className="text-lg font-medium mb-4">Analytics Dashboard</h3>
            <div className="h-64 bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Chart visualization would be displayed here</p>
            </div>
          </div>
        ),
      },
      {
        value: "settings",
        label: "Settings",
        content: (
          <div className="p-4 bg-card rounded-md space-y-4">
            <h3 className="text-lg font-medium">Settings</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Enable notifications</span>
                <div className="h-6 w-10 bg-primary rounded-full relative">
                  <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Dark mode</span>
                <div className="h-6 w-10 bg-muted rounded-full relative">
                  <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Auto-save</span>
                <div className="h-6 w-10 bg-primary rounded-full relative">
                  <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
};
