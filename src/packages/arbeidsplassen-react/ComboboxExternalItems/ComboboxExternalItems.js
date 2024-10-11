import React, { useId } from "react";
import { BodyLong, Chips, VStack } from "@navikt/ds-react";
import PropTypes from "prop-types";

function ComboboxExternalItems({
  ariaLive = "polite",
  fontSize = "normal",
  fontWeight = "regular",
  items = [],
  itemsLeadingText,
  noItemsText,
  removeComboboxItem,
}) {
  const chipsLabelId = `ul-label-removable-chips-${useId()}`;

  return (
    <VStack aria-live={ariaLive}>
      {items.length === 0 ? (
        <BodyLong
          weight={fontWeight}
          size={fontSize}
          className="combobox-external-items-leading-text mb-2"
        >
          {noItemsText}
        </BodyLong>
      ) : (
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
            {items.map((item, index) => (
              <Chips.Removable
                key={`${item}-${index}`}
                onDelete={() => {
                  removeComboboxItem(item);
                }}
              >
                {item}
              </Chips.Removable>
            ))}
          </Chips>
        </VStack>
      )}
    </VStack>
  );
}

ComboboxExternalItems.propTypes = {
  ariaLive: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  itemsLeadingText: PropTypes.string.isRequired,
  noItemsText: PropTypes.string.isRequired,
  removeComboboxItem: PropTypes.func.isRequired,
};

export default ComboboxExternalItems;
