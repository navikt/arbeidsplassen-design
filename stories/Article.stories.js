import React from "react";
import Container from "../src/Container/Container";
import Heading from "../src/Heading/Heading";
import Ingress from "../src/Ingress/Ingress";
import BodyText from "../src/BodyText/BodyText";
import List from "../src/List/List";

export default {
    title: "Pages/Article",
    parameters: {
        layout: "fullscreen",
    },
};

export const Article = () => (
    <Container size="medium">
        <article>
            <section className="mb-4">
                <Heading level="1" className="mb-1">
                    Om Arbeidsplassen
                </Heading>
                <Ingress className="mb-1">
                    Vårt mål er at arbeidsmarkedet skal være så oversiktlig som
                    mulig for alle, enten du er på jakt etter en jobb eller
                    leter etter en kandidat.
                </Ingress>
                <BodyText className="mb-1">
                    Jobbtreff er en ny tjeneste på arbeidsplassen.no. Nå kan du
                    som er jobbsøker bli kjent med en bedrift som trenger folk.
                    De forteller om hva slags kompetanse de trenger og om
                    jobbmulighetene.
                </BodyText>
                <BodyText>
                    Dersom det er noe du gjerne vil at bedriften skal snakke om,
                    kan du sende inn forhåndsdefinerte temaer før sendingen
                    starter. Du kan også stille spørsmål underveis i sendingen.
                </BodyText>
            </section>

            <section className="mb-4">
                <Heading level="2" className="mb-1" size="large">
                    Forklar hvordan du går fram
                </Heading>
                <BodyText className="mb-1">
                    Dersom det er noe du gjerne vil at bedriften skal snakke om,
                    kan du sende inn forhåndsdefinerte temaer før sendingen
                    starter. Du kan også stille spørsmål underveis i sendingen.
                </BodyText>
                <BodyText>
                    Hvis du synes det bedriften forteller om er interessant, kan
                    du ta kontakt med dem etter jobbtreffet. De vil forklare
                    hvordan du går fram.
                </BodyText>
            </section>

            <section className="mb-4">
                <Heading level="2" className="mb-1" size="large">
                    Tjenestene på Arbeidsplassen er kostnadsfrie
                </Heading>
                <BodyText className="mb-1">
                    På Arbeidsplassen kan jobbsøkere utføre søk og finne
                    stillingsannonser som opprinnelig er publisert i ulike
                    portaler. Dette kan vi gjøre fordi vi har et utstrakt
                    samarbeid med store og små stillingsaktører.
                </BodyText>
                <Heading level="3" size="small" className="mb-1">
                    Annonser
                </Heading>
                <BodyText className="mb-1">
                    Sendingen blir annonsert på arbeidsplassen.no. På forhånd
                    kan du lese hva bedriften har tenkt å fortelle om. Klikk på
                    lenken for jobbtreffet når sendingen starter.
                </BodyText>
                <Heading level="3" size="small" className="mb-1">
                    Innlogging
                </Heading>
                <BodyText className="mb-1">
                    Arbeidsgivere kan også velge å logge seg på Arbeidsplassen
                    og lyse ut direkte på Arbeidsplassen.no.
                </BodyText>
                <BodyText className="mb-1">
                    Dette kan vi gjøre fordi vi har et utstrakt samarbeid med
                    store og små stillingsaktører.
                </BodyText>
            </section>

            <section className="mb-4">
                <Heading level="2" className="mb-1" size="large">
                    Slik følger du en sending
                </Heading>
                <BodyText className="mb-1">
                    Sendingen blir annonsert på arbeidsplassen.no. På forhånd
                    kan du lese hva bedriften har tenkt å fortelle om. Klikk på
                    lenken for jobbtreffet når sendingen starter.
                </BodyText>
                <List className="mb-1">
                    <li>Appelsin</li>
                    <li>Pære</li>
                    <li>Druer</li>
                    <li>Kiwi</li>
                </List>
                <BodyText>
                    Det er helt uforpliktende og ufarlig å delta. Verken
                    bedriften eller de andre deltakerne ser, hører eller vet
                    hvem som følger sendingen.
                </BodyText>
            </section>
        </article>
    </Container>
);
