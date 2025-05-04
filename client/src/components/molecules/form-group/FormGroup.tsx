import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";
import { Input } from "@/components/atoms/input/Input";
import { Label } from "@/components/ui/label";

export interface FormGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  helpText?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const FormGroup = forwardRef<HTMLInputElement, FormGroupProps>(
  ({ id, label, error, helpText, className, labelClassName, inputClassName, ...props }, ref) => {
    return (
      <div className={cn("space-y-2", className)}>
        <Label 
          htmlFor={id} 
          className={cn(error && "text-destructive", labelClassName)}
        >
          {label}
        </Label>
        <Input 
          id={id}
          ref={ref}
          error={!!error}
          className={inputClassName}
          aria-describedby={helpText ? `${id}-description` : undefined}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
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
