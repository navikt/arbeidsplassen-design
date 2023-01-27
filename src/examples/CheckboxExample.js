import {Checkbox, CheckboxGroup} from "@navikt/ds-react";

const CheckboxExample = () => {
    const handleChange = (val) => console.log(val);

    return (
        <>
            <CheckboxGroup
                legend="Velg arbeidssted"
                description="Fremste rad er nærmest nødutgangene"
                onChange={(val) => handleChange(val)}
                defaultValue={["Bakerst"]}
            >
                <Checkbox value="Fremst">Alta</Checkbox>
                <Checkbox value="Midterst">Bergen</Checkbox>
                <Checkbox value="Bakerst">Oslo</Checkbox>
                <Checkbox value="Fremst">Trondheim</Checkbox>
                <Checkbox value="Førersetet" disabled>Jan Mayen</Checkbox>
            </CheckboxGroup>
        </>

    );
};

export default CheckboxExample;