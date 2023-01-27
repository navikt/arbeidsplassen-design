import { LinkPanel } from "@navikt/ds-react";

const LinkPanelExample = () => {
    return (
        <LinkPanel href="#" border>
            <LinkPanel.Title>Arbeidssøker eller permittert</LinkPanel.Title>
            <LinkPanel.Description>
                Om jobb, registrering, CV, dagpenger og feriepenger av dagpenger
            </LinkPanel.Description>
        </LinkPanel>
    );
};

export default LinkPanelExample;