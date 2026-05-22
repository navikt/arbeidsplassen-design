import { Link } from "@navikt/ds-react";

interface SkipLinkProps {
    href?: string;
    text?: string;
}

export default function SkipLink({ href = "#main", text = "Hopp til innhold" }: SkipLinkProps) {
    return (
        <Link href={href} className="arb-skip-link">
            {text}
        </Link>
    );
}