import { cn } from "@/lib/utils";
import { LucideIcon, LucideProps } from "lucide-react";
import { forwardRef } from "react";

export interface IconProps extends LucideProps {
  name: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name: Icon, size = "md", className, ...props }, ref) => {
    const sizeMap = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    };

    return (
      <Icon
        ref={ref}
        className={cn(sizeMap[size], className)}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export { Icon };
