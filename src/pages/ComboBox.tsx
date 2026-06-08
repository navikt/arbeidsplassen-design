import { UNSAFE_Combobox } from "@navikt/ds-react";
import {
    PLACEHOLDER_INPUT_DESCRIPTION,
    PLACEHOLDER_INPUT_LABEL,
    PLACEHOLDER_INPUT_OPTIONS,
} from "@/examples/placeholders";
import Layout from "@/examples/Layout";

export default function ComboBoxExample() {
    return (
        <Layout title="ComboBox">
            <UNSAFE_Combobox
                allowNewValues
                label={PLACEHOLDER_INPUT_LABEL}
                description={PLACEHOLDER_INPUT_DESCRIPTION}
                options={PLACEHOLDER_INPUT_OPTIONS}
                isMultiSelect
            />
        </Layout>
    );
}
