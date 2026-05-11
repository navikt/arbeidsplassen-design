import React, { forwardRef } from "react";
import { Checkbox, ErrorMessage } from "@navikt/ds-react";

export interface CheckboxFieldProps {
    label: React.ReactNode;
    children?: React.ReactNode;
    error?: React.ReactNode;
    checked: boolean;
    onChange?: (value: boolean) => void;
    size?: "small" | "medium";
    className?: string;
}

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
    (
        {
            label,
            children,
            error,
            checked,
            onChange,
            size = "medium",
            className,
        },
        ref
    ) => {
        const contentId = React.useId();
        const errorId = React.useId();

        const describedBy = [
            children && contentId,
            error && errorId,
        ]
            .filter(Boolean)
            .join(" ") || undefined;

        return (
            <div className={className}>
                {children && (
                    <div id={contentId} className="mb-3">
                        {children}
                    </div>
                )}

                <Checkbox
                    ref={ref}
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    aria-describedby={describedBy}
                    size={size as "small" | "medium"}
                >
                    {label}
                </Checkbox>

                {error && (
                    <ErrorMessage id={errorId} size={size as "small" | "medium"} showIcon>
                        {error}
                    </ErrorMessage>
                )}
            </div>
        );
    }
);

export default CheckboxField;
