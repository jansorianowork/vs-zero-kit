import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { NavigationItem } from "@/components/molecules/navigation-item/NavigationItem";
import { LucideIcon } from "lucide-react";

export interface NavSection {
  title: string;
  items: {
    label: string;
    icon?: LucideIcon;
    isActive?: boolean;
    onClick?: () => void;
    hasDivider?: boolean;
  }[];
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  version?: string;
  navSections: NavSection[];
  footer?: ReactNode;
}

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ className, logo, version, navSections, footer, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex flex-col h-screen border-r bg-background",
          className
        )}
        {...props}
      >
        {/* Header */}
        {logo && (
          <div className="border-b p-4">
            <div className="flex items-center space-x-2">
              {logo}
              {version && <p className="text-xs text-muted-foreground">v{version}</p>}
            </div>
          </div>
        )}
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {navSections.map((section, index) => (
            <div key={index}>
              <div className="mb-2 px-2 flex items-center justify-between">
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {section.title}
                </h3>
                <button className="h-5 w-5 rounded-sm inline-flex items-center justify-center text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <NavigationItem
                    key={itemIndex}
                    icon={item.icon}
                    isActive={item.isActive}
                    hasDivider={item.hasDivider}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </NavigationItem>
                ))}
              </div>
            </div>
          ))}
        </nav>
        
        {/* Footer */}
        {footer && <div className="border-t p-4">{footer}</div>}
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";

export { Sidebar };
