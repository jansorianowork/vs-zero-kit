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
    const Component = as || variant || "p";

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
