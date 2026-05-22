import { type ReactNode, type MouseEventHandler } from "react";
import { Button } from "@navikt/ds-react";

type ButtonVariant =
    | "primary"
    | "primary-neutral"
    | "secondary"
    | "secondary-neutral"
    | "tertiary"
    | "tertiary-neutral"
    | "danger";

interface FeedbackButtonProps {
    children: ReactNode;
    icon?: ReactNode;
    variant?: ButtonVariant;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    ariaDescribedby?: string;
}

export default function FeedbackButton({
    children,
    icon,
    variant = "tertiary-neutral",
    className,
    onClick,
    ariaDescribedby,
}: FeedbackButtonProps) {
    return (
        <Button
            variant={variant}
            className={className ? `arb-feedback-button ${className}` : "arb-feedback-button"}
            onClick={onClick}
            aria-describedby={ariaDescribedby}
        >
            <span className="arb-feedback-button-inner">
                {icon}
                {children}
            </span>
        </Button>
    );
}
