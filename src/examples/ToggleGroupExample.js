import { ToggleGroup } from "@navikt/ds-react";
import Heart from "../components/icons/Heart";
import User from "../components/icons/User";
import Building from "../components/icons/Building";

const ToggleGroupExample = () => {
    return (
        <ToggleGroup defaultValue="lest" onChange={console.log}>
            <ToggleGroup.Item value="ulest">
                <Heart />
                Ulest
            </ToggleGroup.Item>
            <ToggleGroup.Item value="lest">
                <User />
                Leste
            </ToggleGroup.Item>
            <ToggleGroup.Item value="sendt">
                <Building />
                Sendt
            </ToggleGroup.Item>
        </ToggleGroup>
    );
};

export default ToggleGroupExample;