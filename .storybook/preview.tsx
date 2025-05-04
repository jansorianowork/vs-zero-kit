import type { Preview } from "@storybook/react";
import React from "react";
import { VIEWPORTS } from "./viewports";
import "../client/src/index.css";
import { ThemeProvider } from "../client/src/providers/theme-provider";

// Dark theme setup
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { 
      viewports: VIEWPORTS,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f0f0f',
        },
      ],
    },
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      
      return (
        <ThemeProvider defaultTheme={theme || "light"}>
          <div className={theme === 'dark' ? 'dark' : ''}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
