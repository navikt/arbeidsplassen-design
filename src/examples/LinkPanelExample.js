import {LinkPanel} from "@navikt/ds-react";

const LinkPanelExample = () => {
    return (
        <>
            <LinkPanel href="#" border={false} className="bg-tertiary-5 mb-2">
                <LinkPanel.Title>Finn en jobb</LinkPanel.Title>
                <LinkPanel.Description>
                    Søk i Norges største database etter din neste jobb.
                </LinkPanel.Description>
            </LinkPanel>

            <LinkPanel href="#" border={false} className="bg-primary-20 mb-2">
                <LinkPanel.Title>Møt en bedrift</LinkPanel.Title>
                <LinkPanel.Description>
                    Følg en direkte sending og bli kjent med bedriften og deres stillinger.
                </LinkPanel.Description>
            </LinkPanel>

            <LinkPanel href="#" border={false} className="bg-secondary-20 mb-2">
                <LinkPanel.Title>Stillingsannonse med superrask søknad</LinkPanel.Title>
                <LinkPanel.Description>
                    Motta søknader raskt og enkelt fra relevante jobbsøkere.
                </LinkPanel.Description>
            </LinkPanel>
        </>
    );
};

export default LinkPanelExample;