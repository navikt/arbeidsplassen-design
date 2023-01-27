import {Checkbox, CheckboxGroup} from "@navikt/ds-react";

const CheckboxExample = () => {
    const handleChange = (val) => console.log(val);

    return (
        <>
            <CheckboxGroup
                legend="Hvor vil du sitte?"
                description="Fremste rad er nærmest nødutgangene"
                onChange={(val) => handleChange(val)}
                defaultValue={["Bakerst"]}
            >
                <Checkbox value="Bakerst">Bakerst</Checkbox>
                <Checkbox value="Midterst">Midterst</Checkbox>
                <Checkbox value="Fremst">Fremst</Checkbox>
                <Checkbox value="Førersetet" disabled>Førersetet</Checkbox>
            </CheckboxGroup>
        </>

    );
};

export default CheckboxExample;