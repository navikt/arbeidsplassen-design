import { Select } from "@navikt/ds-react";
import Layout from "../examples/Layout";
import { PLACEHOLDER_INPUT_LABEL, PLACEHOLDER_INPUT_OPTIONS } from "@/examples/placeholders";

const SelectExample = () => {
    return (
        <Layout title="Select">
            <Select label={PLACEHOLDER_INPUT_LABEL}>
                <option value="">Velg matvare</option>
                {PLACEHOLDER_INPUT_OPTIONS.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </Select>
        </Layout>
    );
};

export default SelectExample;
