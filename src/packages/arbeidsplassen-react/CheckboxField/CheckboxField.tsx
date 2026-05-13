import React, {ComponentPropsWithoutRef, forwardRef} from "react";
import { Checkbox, ErrorMessage } from "@navikt/ds-react";

type AkselCheckBoxProps = ComponentPropsWithoutRef<typeof Checkbox>;
export type CheckboxFieldProps = Omit<AkselCheckBoxProps, "error" | "errorId" | "onChange"> & {
    label: React.ReactNode;
    error?: React.ReactNode;
    onChange?: (value: boolean) => void;
};

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
            ...checboxProps
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
                    {...checboxProps}
                    ref={ref}
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    aria-describedby={describedBy}
                    error={Boolean(error)}
                    errorId={error != null ? errorId : undefined}
                    size={size}
                >
                    {label}
                </Checkbox>

                {error && (
                    <ErrorMessage id={errorId} size={size} showIcon>
                        {error}
                    </ErrorMessage>
                )}
            </div>
        );
    }
);

export default CheckboxField;
