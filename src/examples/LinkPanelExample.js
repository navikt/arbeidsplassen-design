import { LinkPanel } from "@navikt/ds-react";

const LinkPanelExample = () => {
  return (
    <>
        <LinkPanel href="#" className="mb-2 pa-2">
            <LinkPanel.Title>Finn en jobb</LinkPanel.Title>
            <LinkPanel.Description>
                Søk i Norges største database etter din neste jobb.
            </LinkPanel.Description>
        </LinkPanel>

      <LinkPanel href="#" border={false} className="bg-text-tertiary mb-2 pa-2">
          <LinkPanel.Title>Finn en jobb</LinkPanel.Title>
        <LinkPanel.Description>
          Søk i Norges største database etter din neste jobb.
        </LinkPanel.Description>
      </LinkPanel>

        <LinkPanel href="#" border={false} className="bg-text-primary-dark mb-2 pa-2">
            <LinkPanel.Title>Finn en jobb</LinkPanel.Title>
            <LinkPanel.Description>
                Søk i Norges største database etter din neste jobb.
            </LinkPanel.Description>
        </LinkPanel>

      <LinkPanel href="#" border={false} className="bg-text-primary-light mb-2 pa-2">
        <LinkPanel.Title>Møt en bedrift</LinkPanel.Title>
        <LinkPanel.Description>
          Følg en direkte sending og bli kjent med bedriften og deres
          stillinger. Motta søknader raskt og enkelt fra relevante jobbsøkere.
        </LinkPanel.Description>
      </LinkPanel>

      <LinkPanel href="#" border={false} className="bg-text-secondary mb-2 pa-2">
        <LinkPanel.Title>Stillingsannonse med superrask søknad</LinkPanel.Title>
        <LinkPanel.Description>
          Motta søknader raskt og enkelt fra relevante jobbsøkere.
        </LinkPanel.Description>
      </LinkPanel>
    </>
  );
};

export default LinkPanelExample;
