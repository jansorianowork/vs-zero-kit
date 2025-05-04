import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "notification" | "media";
  footer?: React.ReactNode;
  mediaContent?: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, footer, mediaContent, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          variant === "media" && "overflow-hidden",
          className
        )}
        {...props}
      >
        {variant === "media" && mediaContent && (
          <div className="h-40 bg-muted">
            {mediaContent}
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
        {footer && (
          <div className={cn("p-6", variant !== "notification" && "pt-0")}>
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
