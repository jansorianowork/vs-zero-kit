import { cn } from "@/lib/utils";
import { ElementType, HTMLAttributes, forwardRef } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "blockquote"
  | "code"
  | "lead"
  | "large"
  | "small"
  | "muted";

type TypographyProps<T extends ElementType> = {
  variant?: TypographyVariant;
  as?: T;
} & HTMLAttributes<HTMLElement>;

const Typography = forwardRef<HTMLElement, TypographyProps<ElementType>>(
  ({ className, variant = "p", as, children, ...props }, ref) => {
    // Map variants to appropriate HTML elements if 'as' is not provided
    const getElementFromVariant = (variant: TypographyVariant): ElementType => {
      switch (variant) {
        case "h1": return "h1";
        case "h2": return "h2";
        case "h3": return "h3";
        case "h4": return "h4";
        case "h5": return "h5";
        case "h6": return "h6";
        case "blockquote": return "blockquote";
        case "code": return "code";
        case "lead": return "p";
        case "large": return "p";
        case "small": return "p";
        case "muted": return "p";
        default: return "p";
      }
    };

    const Component = as || getElementFromVariant(variant);

    const variantClassMap: Record<TypographyVariant, string> = {
      h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold tracking-tight",
      h5: "text-lg font-semibold tracking-tight",
      h6: "text-base font-semibold tracking-tight",
      p: "leading-7",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "font-mono rounded bg-muted px-[0.3rem] py-[0.2rem]",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    };

    return (
      <Component 
        ref={ref}
        className={cn(variantClassMap[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export { Typography };
