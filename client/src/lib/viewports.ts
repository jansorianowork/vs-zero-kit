import { DeviceType, deviceSizes } from "./utils";

export const VIEWPORTS = {
  mobile: {
    name: "Mobile",
    styles: {
      width: `${deviceSizes.mobile.width}px`,
      height: `${deviceSizes.mobile.height}px`,
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: `${deviceSizes.tablet.width}px`,
      height: `${deviceSizes.tablet.height}px`,
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: `${deviceSizes.desktop.width}px`,
      height: `${deviceSizes.desktop.height}px`,
    },
  },
};

export function getDevicePreviewStyles(deviceType: DeviceType) {
  const device = deviceSizes[deviceType];
  
  return {
    width: `${device.width}px`,
    height: `${device.height}px`,
  };
}
