import ConfusedFigure from "../illustrations/ConfusedFigure";
import { BodyLong, Heading, VStack } from "@navikt/ds-react";

export interface NotFoundProps {
    title?: string;
    text?: string;
    className?: string;
}

export default function NotFound({ title, text, className }: NotFoundProps) {
    return (
        <VStack align="center" className={className}>
            <ConfusedFigure className="mb-8" ariaHidden={true} />
            <Heading spacing size="large" align="center" level="1">
                {title ? title : "Fant ikke siden"}
            </Heading>
            {text ? (
                <BodyLong align="center">{text}</BodyLong>
            ) : (
                <BodyLong align="center">
                    Nettsiden kan være slettet eller flyttet, eller det var en feil i lenken som førte deg hit.
                </BodyLong>
            )}
        </VStack>
    );
}