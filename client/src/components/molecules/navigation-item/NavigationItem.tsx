import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Icon } from "@/components/atoms/icon/Icon";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface NavigationItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  isActive?: boolean;
  hasDivider?: boolean;
}

const NavigationItem = forwardRef<HTMLButtonElement, NavigationItemProps>(
  ({ className, icon, children, isActive = false, hasDivider = false, ...props }, ref) => {
    return (
      <>
        {hasDivider && <div className="h-px bg-border my-2" />}
        <button
          ref={ref}
          className={cn(
            "tree-nav-item w-full text-left",
            isActive && "active",
            className
          )}
          {...props}
        >
          {icon && <Icon name={icon} className="mr-2" size="sm" />}
          <span>{children}</span>
        </button>
      </>
    );
  }
);

NavigationItem.displayName = "NavigationItem";

export { NavigationItem };
