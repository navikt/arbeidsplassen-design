import Layout from "../examples/Layout";
import { BodyLong, Heading, Ingress, LinkPanel } from "@navikt/ds-react";
import Illustration from "../examples/Illustration";

export default function ArticlePage() {
  return (
    <Layout>
      <article className="arb-article">
        <Heading size="xlarge" level="1" spacing>
          When Gregor Samsa woke
        </Heading>

        <Ingress spacing>
          Found himself transformed in his bed into a horrible vermin.
        </Ingress>

        <div className="arb-article-figure">
          <Illustration className="arb-article-figure-pull-outside" />
        </div>

        <section className="arb-article-section">
          <Heading size="large" level="2" spacing>
            Seksjonstittel
          </Heading>
          <BodyLong>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly able to cover it and seemed ready
            to slide off any moment.
          </BodyLong>
        </section>

        <section className="arb-article-subsection">
          <Heading size="large" level="2" spacing>
            Seksjonstittel
          </Heading>
          <BodyLong>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections.
          </BodyLong>

          <ul>
            <li>
              <BodyLong>Armour-like back</BodyLong>
            </li>
            <li>
              <BodyLong>Brown belly</BodyLong>
            </li>
            <li>
              <BodyLong>Stiff sections</BodyLong>
            </li>
            <li>
              <BodyLong>The bedding</BodyLong>
            </li>
          </ul>

          <BodyLong>
            The bedding was hardly able to cover it and seemed ready to slide
            off any moment.
          </BodyLong>
        </section>

        <section className="arb-article-subsection">
          <Heading size="medium" spacing>
            Subseksjonstittel
          </Heading>
          <BodyLong spacing>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly able to cover it and seemed ready
            to slide off any moment.
          </BodyLong>
        </section>

        <section className="arb-article-section">
          <Heading size="medium" spacing>
            Subseksjonstittel
          </Heading>
          <BodyLong spacing>
            However hard he threw himself onto his right, he always rolled back
            to where he was. He must have tried it a hundred times, shut his
            eyes so that he wouldn't have to look at the floundering legs, and
            only stopped when he began to feel a mild, dull pain there that he
            had never felt before. "Oh, God", he thought, "what a strenuous
            career it is that I've chosen!
          </BodyLong>
          <BodyLong>
            Travelling day in and day out. Doing business like this takes much
            more effort than doing your own business at home, and on top of that
            there's the curse of travelling, worries about making train
            connections, bad and irregular food, contact with different people
            all the time so that you can never get to know anyone or become
            friendly with them. It can all go to Hell!
          </BodyLong>
        </section>

        <section className="arb-article-section">
          <Heading size="large" level="2" spacing>
            Seksjonstittel
          </Heading>
          <BodyLong spacing>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly able to cover it and seemed ready
            to slide off any moment.
          </BodyLong>
          <BodyLong spacing>
            <a href="#">Gregor Samsa woke from troubled dreams</a>
          </BodyLong>
          <BodyLong spacing>
            He lay on his armour-like back, and if he lifted his head a little
            he could see his brown belly, slightly domed and divided by arches
            into stiff sections. The bedding was hardly able to cover it and
            seemed ready to slide off any moment.
          </BodyLong>
        </section>

        <section>
          <Heading size="large" level="2" spacing>
            Videre lesing
          </Heading>
          <LinkPanel className="arb-link-panel-peach">
            <LinkPanel.Title>Article link</LinkPanel.Title>
          </LinkPanel>
        </section>
      </article>
    </Layout>
  );
}
