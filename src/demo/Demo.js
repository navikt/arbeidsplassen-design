import React from "react";
import BodyText from "../components/BodyText/BodyText";
import Container from "../components/Container/Container";
import Heading from "../components/Heading/Heading";
import Ingress from "../components/Ingress/Ingress";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import Header from "../components/Header/Header";
import Anchor from "../components/Anchor/Anchor";
import Alert from "../components/Alert/Alert";
import BackLink from "../components/BackLink/BackLink";

function Demo() {
    return (
        <div className="demo">
            <Header />
            <main>
                <Container size="medium">
                    <Section>
                        <Heading level={2}>Headings</Heading>
                        <Heading level={1}>Heading 1</Heading>
                        <Heading level={2}>Heading 2</Heading>
                        <Heading level={3}>Heading 3</Heading>
                        <Heading level={4}>Heading 4</Heading>
                        <Heading level={5}>Heading 5</Heading>
                        <Heading level={6}>Heading 6</Heading>
                    </Section>

                    <Section>
                        <Heading level={2}>Ingress</Heading>
                        <Ingress>
                            Vil du bli kjent med en bedrift? Følg en direkte sending der bedriften forteller om seg selv
                            og hva slags stillinger du kan søke på.
                        </Ingress>
                    </Section>

                    <Section>
                        <Heading level={2}>BodyText</Heading>
                        <BodyText>
                            Jobbtreff er en ny tjeneste på arbeidsplassen.no. Nå kan du som er jobbsøker bli kjent med
                            en bedrift som trenger folk. De forteller om hva slags kompetanse de trenger og om
                            jobbmulighetene.
                        </BodyText>
                    </Section>

                    <Section>
                        <Heading level={2}>Button</Heading>
                        <ButtonGroup>
                            <Button variant="primary">Button</Button>
                            <Button variant="secondary">Button</Button>
                            <Button variant="tertiary">Button</Button>
                            <Button variant="primary" disabled>
                                Button
                            </Button>
                        </ButtonGroup>
                    </Section>

                    <Section>
                        <Heading level={2}>Link</Heading>
                        <Anchor href="/">Link</Anchor>
                    </Section>

                    <Section>
                        <Heading level={2}>BackLink</Heading>
                        <BackLink />
                    </Section>

                    <Section>
                        <Heading level={2}>Alert</Heading>
                        <Alert variant="info" title="Søket ditt er lagret">
                            Du finner det igjen under Lagrede søk
                        </Alert>
                        <Alert variant="warning" title="Varsling er utgått">
                            Du kan starte ny varsling på Min side
                        </Alert>
                        <Alert variant="error" title="Det er en feil">
                            Forsøk å laste siden på nytt
                        </Alert>
                        <Alert variant="info" title="Søket ditt er lagret">
                            Lang tekst om at du finner det igjen under Lagrede søk. På denne siden kan du også endre, slette eller forlenge varslinger.
                        </Alert>
                    </Section>
                </Container>
            </main>
            <Footer />
        </div>
    );
}

Demo.defaultProps = {};

Demo.propTypes = {};

export default Demo;
