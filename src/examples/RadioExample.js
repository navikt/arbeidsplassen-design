import { Radio, RadioGroup } from "@navikt/ds-react";

const RadioExample = () => {
    const handleChange = (val) => console.log(val);

    return (
        <RadioGroup
            legend="Velg din aldersgruppe."
            onChange={(val) => handleChange(val)}
            defaultValue="10"
        >
            <Radio value="10">10-20 år</Radio>
            <Radio value="20">21-45 år</Radio>
            <Radio value="40">46-80 år</Radio>
            <Radio value="40" disabled>Alle</Radio>
        </RadioGroup>
    );
};

export default RadioExample;