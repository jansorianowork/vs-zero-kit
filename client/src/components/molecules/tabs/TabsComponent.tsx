import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { forwardRef } from "react";

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsComponentProps {
  tabs: TabItem[];
  defaultValue?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
  tabsListClassName?: string;
  tabsContentClassName?: string;
}

const TabsComponent = forwardRef<HTMLDivElement, TabsComponentProps>(
  ({ tabs, defaultValue, orientation = "horizontal", className, tabsListClassName, tabsContentClassName }, ref) => {
    const defaultTab = defaultValue || tabs[0]?.value;
    
    return (
      <Tabs
        defaultValue={defaultTab}
        className={cn(
          orientation === "vertical" && "flex gap-4",
          className
        )}
        ref={ref}
      >
        <TabsList
          className={cn(
            orientation === "vertical" && "flex-col h-auto w-auto",
            tabsListClassName
          )}
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              disabled={tab.disabled}
              className={cn(
                orientation === "vertical" && "w-full justify-start"
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className={cn("flex-1", tabsContentClassName)}>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    );
  }
);

TabsComponent.displayName = "TabsComponent";

export { TabsComponent };
