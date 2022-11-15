import React from "react";
import Header, {
    HeaderAuthenticationStatus,
    HeaderRoutes,
    HeaderVariant,
} from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Container from "../../src/Container/Container";
import Panel from "../../src/Panel/Panel";
import Heading from "../../src/Heading/Heading";
import Ingress from "../../src/Ingress/Ingress";
import BodyText from "../../src/BodyText/BodyText";

export default {
    title: "Pages/Home",
    parameters: {
        layout: "fullscreen",
    },
};

export const Default = (args) => (
    <>
        <Header
            variant={HeaderVariant.ALL}
            authenticationStatus={HeaderAuthenticationStatus.NOT_AUTHENTICATED}
            active={HeaderRoutes.PERSON}
        />
        <main className="header-offset gb-2">
            <Container color="orange" className="gb-1">
                <Panel fullscreen>
                    <Heading level="3" size="large">
                        One morning
                    </Heading>
                    <Ingress>
                        He found himself transformed in his bed into a horrible
                        vermin
                    </Ingress>
                </Panel>
            </Container>

            <Container>
                <Panel color="green" compact>
                    <Heading level="3" size="small" className="mb-1">
                        One morning
                    </Heading>
                    <BodyText>
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly.
                    </BodyText>
                </Panel>
            </Container>
        </main>
        <Footer />
    </>
);
