import {BodyLong, Heading, Panel} from "@navikt/ds-react";

const PanelExample = () => {
    return (
        <Panel border={false} className="bg-tertiary">
            <Heading spacing level="2" size="large">
                Tips til jobbsøknaden
            </Heading>
            <BodyLong>
                Målet med jobbsøknaden er å bli kalt inn til intervju. En god søknad er forutsetningen for at en
                arbeidsgiver skal få lyst til å møte akkurat deg. Les annonsen nøye og se hva de spør etter. Søknaden
                bør svare direkte på stillingsannonsen og vise at nettopp du kan være rett person for jobben.
            </BodyLong>
        </Panel>
    );
};

export default PanelExample;