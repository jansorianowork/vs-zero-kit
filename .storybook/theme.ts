import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'vs-zero-kit',
  brandUrl: 'https://github.com/yourusername/vs-zero-kit',
  brandTarget: '_blank',
  // Colors
  colorPrimary: '#5C4EE5',
  colorSecondary: '#A35EF5',
  
  // UI
  appBg: '#F8F9FA',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E9ECEF',
  appBorderRadius: 8,
  
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"JetBrains Mono", monospace',
  
  // Text colors
  textColor: '#212529',
  textInverseColor: '#F8F9FA',
  textMutedColor: '#6C757D',
  
  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#CED4DA',
  inputTextColor: '#212529',
  inputBorderRadius: 4,
});
