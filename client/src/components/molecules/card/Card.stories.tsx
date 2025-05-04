import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "@/components/atoms/button/Button";
import { Typography } from "@/components/atoms/typography/Typography";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  args: {
    children: (
      <div className="space-y-2">
        <Typography variant="h4">Card Title</Typography>
        <Typography variant="p">This is a sample card with some content.</Typography>
      </div>
    ),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "notification", "media"],
    },
    children: {
      control: { disable: true },
    },
    footer: {
      control: { disable: true },
    },
    mediaContent: {
      control: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Notification: Story = {
  args: {
    variant: "notification",
    children: (
      <div className="space-y-2">
        <Typography variant="h4">Notification</Typography>
        <Typography variant="p">You have a new message from the team.</Typography>
      </div>
    ),
    footer: (
      <div className="flex justify-end gap-2">
        <Button variant="outline">Dismiss</Button>
        <Button>Open</Button>
      </div>
    ),
  },
};

export const Media: Story = {
  args: {
    variant: "media",
    mediaContent: (
      <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
        <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
    ),
    children: (
      <div className="space-y-2">
        <Typography variant="h4">Media Card</Typography>
        <Typography variant="p">This card contains an image or media element.</Typography>
      </div>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <div className="space-y-2">
        <Typography variant="h4">Card With Footer</Typography>
        <Typography variant="p">This card has a footer with action buttons.</Typography>
      </div>
    ),
    footer: (
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    ),
  },
};
