import { cn } from "@/lib/utils";
import { ElementType, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, forwardRef } from "react";
import { Input } from "@/components/atoms/input/Input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export interface FormGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  helpText?: string;
  labelClassName?: string;
  inputClassName?: string;
  as?: "input" | "textarea"; // Support for textarea
}

const FormGroup = forwardRef<HTMLInputElement, FormGroupProps>(
  ({ id, label, error, helpText, className, labelClassName, inputClassName, as = "input", ...props }, ref) => {
    const renderInputElement = () => {
      if (as === "textarea") {
        // Cast props to TextareaHTMLAttributes when using textarea
        return (
          <Textarea
            id={id}
            className={cn(error && "border-destructive", inputClassName)}
            aria-describedby={helpText ? `${id}-description` : undefined}
            aria-invalid={error ? "true" : "false"}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        );
      }

      return (
        <Input 
          id={id}
          ref={ref}
          error={!!error}
          className={inputClassName}
          aria-describedby={helpText ? `${id}-description` : undefined}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
      );
    };

    return (
      <div className={cn("space-y-2", className)}>
        <Label 
          htmlFor={id} 
          className={cn(error && "text-destructive", labelClassName)}
        >
          {label}
        </Label>
        {renderInputElement()}
        {(error || helpText) && (
          <p 
            id={`${id}-description`}
            className={cn(
              "text-sm",
              error ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {error || helpText}
          </p>
        )}
      </div>
    );
  }
);

FormGroup.displayName = "FormGroup";

export { FormGroup };
