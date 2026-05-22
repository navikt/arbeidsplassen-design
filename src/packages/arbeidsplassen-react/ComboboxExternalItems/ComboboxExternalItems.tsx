import { useId } from "react";
import { BodyLong, Chips, VStack } from "@navikt/ds-react";

export type ComboboxItem = string | { label: string; value: string };

export interface ComboboxExternalItemsProps {
    ariaLive?: "off" | "assertive" | "polite";
    fontSize?: "small" | "medium" | "large";
    fontWeight?: "regular" | "semibold";
    items?: ComboboxItem[];
    itemsLeadingText: string;
    noItemsText?: string;
    removeComboboxItem: (item: ComboboxItem) => void;
}

export default function ComboboxExternalItems({
    ariaLive = "polite",
    fontSize = "medium",
    fontWeight = "regular",
    items = [],
    itemsLeadingText,
    noItemsText,
    removeComboboxItem,
}: ComboboxExternalItemsProps) {
    const chipsLabelId = `ul-label-removable-chips-${useId()}`;

    return (
        <VStack aria-live={ariaLive}>
            {items.length === 0 && noItemsText && (
                <BodyLong weight={fontWeight} size={fontSize} className="combobox-external-items-leading-text mb-2">
                    {noItemsText}
                </BodyLong>
            )}
            {items.length > 0 && (
                <VStack>
                    <BodyLong
                        id={chipsLabelId}
                        weight={fontWeight}
                        size={fontSize}
                        className="combobox-external-items-leading-text mb-2"
                    >
                        {itemsLeadingText}
                    </BodyLong>
                    <Chips aria-labelledby={chipsLabelId}>
                        {items.map((item, index) => {
                            if (typeof item === "object") {
                                return (
                                    <Chips.Removable
                                        key={`${item.value}-${index}`}
                                        onDelete={() => {
                                            removeComboboxItem({
                                                label: item.label,
                                                value: item.value,
                                            });
                                        }}
                                    >
                                        {item.label}
                                    </Chips.Removable>
                                );
                            } else {
                                return (
                                    <Chips.Removable
                                        key={`${item}-${index}`}
                                        onDelete={() => {
                                            removeComboboxItem(item);
                                        }}
                                    >
                                        {item}
                                    </Chips.Removable>
                                );
                            }
                        })}
                    </Chips>
                </VStack>
            )}
        </VStack>
    );
}
