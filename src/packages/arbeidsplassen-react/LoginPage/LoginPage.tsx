import FigureWithKey from "../illustrations/FigureWithKey";
import { BodyLong, Button, Heading, VStack } from "@navikt/ds-react";
import { EnterIcon } from "@navikt/aksel-icons";

interface LoginPageProps {
    link?: string;
    className?: string;
}

export default function LoginPage({ link, className }: LoginPageProps) {
    return (
        <VStack align="center" className={className}>
            <FigureWithKey className="mb-8" ariaHidden={true} />
            <Heading spacing size="large" level="1">
                Logg inn for å fortsette
            </Heading>
            <BodyLong className="mb-8">Vi sender deg videre etter du har logget inn.</BodyLong>
            <Button as="a" role="link" variant="primary" href={link} icon={<EnterIcon aria-hidden="true" />}>
                Logg inn
            </Button>
        </VStack>
    );
}