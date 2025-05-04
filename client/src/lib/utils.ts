import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatClassName(status: string) {
  return status.split("-").join(" ");
}

export const deviceSizes = {
  mobile: {
    width: 375,
    height: 667,
  },
  tablet: {
    width: 768,
    height: 1024,
  },
  desktop: {
    width: 1280,
    height: 800,
  },
};

export type DeviceType = keyof typeof deviceSizes;
