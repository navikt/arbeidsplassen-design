import {Checkbox, CheckboxGroup} from "@navikt/ds-react";

const CheckboxExample = () => {
    const handleChange = (val) => console.log(val);

    return (
        <>
            <CheckboxGroup
                legend="Velg arbeidssted"
                description="Du kan velge flere steder om du vil"
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