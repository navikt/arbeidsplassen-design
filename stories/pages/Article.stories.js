import React from "react";
import Header from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Container from "../../src/Container/Container";
import Heading from "../../src/Heading/Heading";
import Ingress from "../../src/Ingress/Ingress";
import BodyText from "../../src/BodyText/BodyText";
import Anchor from "../../src/Anchor/Anchor";
import List from "../../src/List/List";
import Blockquote from "../../src/Blockquote/Blockquote";
import LinkPanel, { LinkPanelTitle } from "../../src/LinkPanel/LinkPanel";
import PullOutside from "../../src/Container/PullOutside";
import Figure from "../../src/Figure/Figure";
import SmallText from "../../src/SmallText/SmallText";

export default {
    title: "Pages/Article",
    parameters: {
        layout: "fullscreen",
    },
};

export const Default = (args) => (
    <>
        <Header
            variant="all"
            authenticationStatus="not-authenticated"
            active="person"
        />
        <main className="dsa-header-offset">
            <Container size="small" className="gt-2 gb-2">
                <Heading level="1" size="xlarge" className="mb-0_5">
                    When Gregor Samsa woke
                </Heading>
                <Ingress className="mb-0_5">
                    Found himself transformed in his bed into a horrible vermin.
                </Ingress>
                <SmallText className="mb-3">
                    Publisert: Torsdag 1. august 2021
                </SmallText>

                <PullOutside className="mb-3">
                    <Figure>
                        <img src="/img.png" width="100%" />
                        <figcaption>
                            Bildetekst bildetekst bildetekst bildetekst.
                        </figcaption>
                    </Figure>
                </PullOutside>
                <Heading level="2" size="large" className="mb-0_5">
                    Seksjonstittel
                </Heading>
                <BodyText className="mb-3">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                </BodyText>

                <Heading level="2" size="large" className="mb-0_5">
                    Seksjonstittel
                </Heading>
                <BodyText className="mb-1">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections.
                </BodyText>
                <List className="mb-1">
                    <li>Armour-like back</li>
                    <li>Brown belly</li>
                    <li>Stiff sections</li>
                    <li>The bedding</li>
                </List>
                <BodyText className="mb-2">
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment.
                </BodyText>

                <Heading level="3" size="medium" className="mb-0_5">
                    Subseksjonstittel
                </Heading>
                <BodyText className="mb-2">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                </BodyText>

                <Heading level="3" size="medium" className="mb-0_5">
                    Subseksjonstittel
                </Heading>
                <BodyText className="mb-1">
                    However hard he threw himself onto his right, he always
                    rolled back to where he was. He must have tried it a hundred
                    times, shut his eyes so that he wouldn't have to look at the
                    floundering legs, and only stopped when he began to feel a
                    mild, dull pain there that he had never felt before. "Oh,
                    God", he thought, "what a strenuous career it is that I've
                    chosen!
                </BodyText>
                <BodyText className="mb-3">
                    Travelling day in and day out. Doing business like this
                    takes much more effort than doing your own business at home,
                    and on top of that there's the curse of travelling, worries
                    about making train connections, bad and irregular food,
                    contact with different people all the time so that you can
                    never get to know anyone or become friendly with them. It
                    can all go to Hell!
                </BodyText>

                <PullOutside className="mb-3">
                    <Figure>
                        <img src="/img_1.png" width="100%" />
                        <figcaption>
                            Bildetekst bildetekst bildetekst bildetekst.
                        </figcaption>
                    </Figure>
                </PullOutside>

                <Heading level="2" size="large" className="mb-0_5">
                    Seksjonstittel
                </Heading>
                <BodyText className="mb-3">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                </BodyText>

                <Blockquote caption="– Franz Kafka">
                    «He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections.»
                </Blockquote>

                <Heading level="2" size="large" className="mb-0_5">
                    Seksjonstittel
                </Heading>
                <BodyText className="mb-1">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                </BodyText>

                <BodyText className="mb-1">
                    <Anchor href="#">
                        Gregor Samsa woke from troubled dreams
                    </Anchor>
                </BodyText>

                <BodyText className="mb-3">
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                </BodyText>

                <Heading level="2" size="large" className="mb-1">
                    Videre lesing
                </Heading>
                <LinkPanel href="#">
                    <LinkPanelTitle>Article link</LinkPanelTitle>
                </LinkPanel>
            </Container>
        </main>
        <Footer />
    </>
);
