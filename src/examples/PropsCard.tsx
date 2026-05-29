import { type ReactNode } from "react";
import { InfoCard } from "@navikt/ds-react";
import { WrenchIcon } from "@navikt/aksel-icons";

interface PropsCardProps {
    children: ReactNode;
}

export default function PropsCard({ children }: PropsCardProps) {
    return (
        <InfoCard data-color="neutral" className="mt-12">
            <InfoCard.Header icon={<WrenchIcon />}>
                <InfoCard.Title>Props</InfoCard.Title>
            </InfoCard.Header>
            <InfoCard.Content>{children}</InfoCard.Content>
        </InfoCard>
    );
};
