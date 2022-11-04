import React from "react";
import Container from "../src/Container/Container";
import Heading from "../src/Heading/Heading";
import Ingress from "../src/Ingress/Ingress";
import BodyText from "../src/BodyText/BodyText";
import Header from "../src/Header/Header";
import Footer from "../src/Footer/Footer";
import Alert from "../src/Alert/Alert";
import "../src/index.css";

export default {
    title: "Pages/Page",
    parameters: {
        layout: "fullscreen",
    },
};

export const Page = () => (
    <div>
        <Header variant="person" />
        <div className="header-offset">
            <Alert fullWidth>
                <Heading level="3" size="xsmall">
                    Alert title
                </Heading>
                Gregor Samsa woke from troubled dreams.
            </Alert>
            <Container size="medium">
                <article className="mt-2">
                    <section className="mb-4">
                        <Heading level="1" className="mb-1">
                            When Gregor Samsa woke
                        </Heading>
                        <Ingress className="mb-1">
                            Found himself transformed in his bed into a horrible
                            vermin.
                        </Ingress>
                        <BodyText className="mb-1">
                            One morning, when Gregor Samsa woke from troubled
                            dreams, he found himself transformed in his bed into
                            a horrible vermin. He lay on his armour-like back,
                            and if he lifted his head a little he could see his
                            brown belly, slightly domed and divided by arches
                            into stiff sections. The bedding was hardly able to
                            cover it and seemed ready to slide off any moment.
                        </BodyText>
                    </section>
                </article>
            </Container>
            <Footer />
        </div>
    </div>
);
