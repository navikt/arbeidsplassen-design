import { type ReactNode } from "react";

export interface RichTextProps {
    className?: string;
    children: ReactNode;
}

export default function RichText({ children, className }: RichTextProps) {
    return <div className={className ? "arb-rich-text " + className : "arb-rich-text"}>{children}</div>;
}
