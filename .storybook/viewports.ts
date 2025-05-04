import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { VIEWPORTS as customViewports } from '../client/src/lib/viewports';

// Export viewports that match our device preview sizes
export const VIEWPORTS = {
  ...MINIMAL_VIEWPORTS,
  ...customViewports,
};
