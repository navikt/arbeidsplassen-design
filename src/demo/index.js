import React from "react";
import { createRoot } from "react-dom/client";
import BodyText from "../components/BodyText/BodyText";
import Container from "../components/Container/Container";
import Heading from "../components/Heading/Heading";
import Ingress from "../components/Ingress/Ingress";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import Header from "../components/Header/Header";
import Anchor from "../components/Anchor/Anchor";
import Alert from "../components/Alert/Alert";
import Tag from "../components/Tag/Tag";
import Pill from "../components/Pill/Pill";
import TrashIcon from "../components/Feather/TrashIcon";
import List from "../components/List/List";
import ChevronLeft from "../components/Feather/ChevronLeft";
import ChevronRight from "../components/Feather/ChevronRight";

import "./Demo.css";
import "../index.css";

function Index() {
    return (
        <div className="demo">
            <Header />
            <main>
                <Container size="medium">
                    <Section>
                        <Heading level="2">Headings</Heading>
                        <Heading level={1}>Heading 1</Heading>
                        <Heading level="2">Heading 2</Heading>
                        <Heading level={3}>Heading 3</Heading>
                        <Heading level={4}>Heading 4</Heading>
                        <Heading level={5}>Heading 5</Heading>
                        <Heading level={6}>Heading 6</Heading>
                    </Section>

                    <Section>
                        <Heading level="2">Ingress</Heading>
                        <Ingress>
                            Vil du bli kjent med en bedrift? Følg en direkte sending der bedriften forteller om seg selv
                            og hva slags stillinger du kan søke på.
                        </Ingress>
                    </Section>

                    <Section>
                        <Heading level="2">BodyText</Heading>
                        <BodyText>
                            Jobbtreff er en ny tjeneste på arbeidsplassen.no. Nå kan du som er jobbsøker bli kjent med
                            en bedrift som trenger folk. De forteller om hva slags kompetanse de trenger og om
                            jobbmulighetene.
                        </BodyText>
                    </Section>

                    <Section>
                        <Heading level="2">List</Heading>
                        <BodyText>Liste med kulepunkter:</BodyText>
                        <List>
                            <li>Pære</li>
                            <li>Eple</li>
                            <li>Appelsin</li>
                        </List>

                        <BodyText>Nummerert liste:</BodyText>
                        <List variant="ol">
                            <li>Pære</li>
                            <li>Eple</li>
                            <li>Appelsin</li>
                        </List>
                    </Section>

                    <Section>
                        <Heading level="2">Button</Heading>
                        <div className="demo-flex">
                            <Button variant="primary">Button</Button>
                            <Button variant="secondary">Button</Button>
                            <Button variant="tertiary" icon={<TrashIcon />}>
                                Button
                            </Button>
                            <Button variant="primary" disabled>
                                Button
                            </Button>
                        </div>
                    </Section>

                    <Section>
                        <Heading level="2" id="link">
                            Link
                        </Heading>
                        <BodyText>Link på egenhånd:</BodyText>
                        <BodyText>
                            <Anchor href="#link">Link</Anchor>
                        </BodyText>
                        <BodyText>
                            Jobbtreff er en ny tjeneste på <Anchor href="#link">arbeidslpassen.no</Anchor> som du som er
                            jobbsøker kan bruke for å bli kjent med bedrifter som trenger folk.
                        </BodyText>
                        <BodyText>Link med ikon før eller etter:</BodyText>

                        <div className="demo-flex">
                            <Anchor href="#link">
                                <ChevronLeft />
                                Forrige
                            </Anchor>
                            <Anchor href="#link">
                                Neste
                                <ChevronRight />
                            </Anchor>
                        </div>
                    </Section>

                    <Section>
                        <Heading level="2">Alert</Heading>
                        <Alert variant="info" title="Søket ditt er lagret">
                            Du finner det igjen under Lagrede søk
                        </Alert>
                        <Alert variant="warning" title="Varsling er utgått">
                            Du kan starte ny varsling på Min side
                        </Alert>
                        <Alert variant="error" title="Det er en feil">
                            Forsøk å laste siden på nytt
                        </Alert>
                        <Alert variant="error" title="Det er en feil" onClose={() => {}}>
                            Forsøk å laste siden på nytt
                        </Alert>
                        <Alert variant="info" title="Søket ditt er lagret">
                            Lang tekst om at du finner det igjen under Lagrede søk. På denne siden kan du også endre,
                            slette eller forlenge varslinger.
                        </Alert>
                    </Section>

                    <Section>
                        <Heading level="2">Tag</Heading>
                        <div className="demo-flex demo-gap-0_5">
                            <Tag variant="info">Info</Tag>
                            <Tag variant="success">Success</Tag>
                            <Tag variant="error">Error</Tag>
                            <Tag variant="neutral">Neutral</Tag>
                        </div>
                    </Section>

                    <Section>
                        <Heading level="2">Pill</Heading>
                        <div className="demo-flex">
                            <Pill>Fagbrev tømrer</Pill>
                            <Pill>Snekker</Pill>
                        </div>
                    </Section>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

const root = createRoot(document.getElementById("app"));
root.render(<Index />);
