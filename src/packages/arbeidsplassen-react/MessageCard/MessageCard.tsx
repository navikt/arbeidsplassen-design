import type { ReactNode } from "react";
import { ExclamationmarkTriangleFillIcon, InformationSquareFillIcon, XMarkOctagonFillIcon } from "@navikt/aksel-icons";
import { BodyLong, BodyShort, Box, HStack, VStack } from "@navikt/ds-react";

export type MessageCardVariant = "info" | "warning" | "error";

export type HeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";

type MessageCardBaseProps = {
    variant: MessageCardVariant;
    children: ReactNode;
};

export type MessageCardProps = MessageCardBaseProps &
    ({ title: string; titleLevel?: HeadingLevel } | { title?: never; titleLevel?: never });

const variantConfig = {
    info: {
        color: "info-moderate",
        Icon: InformationSquareFillIcon,
    },
    warning: {
        color: "warning-moderate",
        Icon: ExclamationmarkTriangleFillIcon,
    },
    error: {
        color: "danger-moderate",
        Icon: XMarkOctagonFillIcon,
    },
} as const;

export default function MessageCard({ variant, children, title, titleLevel = "h2" }: MessageCardProps) {
    const config = variantConfig[variant];
    const { Icon } = config;
    const hasTitle = Boolean(title?.trim());

    return (
        <Box background={config.color} padding="space-16" borderRadius="12" className="arb-message-card">
            <HStack gap="space-12" align="start" wrap={false}>
                <Icon aria-hidden className={`arb-message-card-icon arb-message-card-icon-${variant}`} />
                <VStack gap="space-8">
                    {hasTitle && (
                        <BodyShort as={titleLevel} weight="semibold" className="arb-message-card-title">
                            {title}
                        </BodyShort>
                    )}
                    <BodyLong as="div">{children}</BodyLong>
                </VStack>
            </HStack>
        </Box>
    );
}
