import Head from "next/head";
import { BodyLong, Heading, Ingress } from "@navikt/ds-react";
import ChipsExample from "../examples/ChipsExample";
import AccordionExample from "../examples/AccordionExample";
import Footer from "../components/Footer/Footer";
import RadioExample from "../examples/RadioExample";
import ButtonExample from "../examples/ButtonExample";
import TextFieldExample from "../examples/TextFieldExample";
import CheckboxExample from "../examples/CheckboxExample";
import SelectExample from "../examples/SelectExample";
import TextareaExample from "../examples/TextareaExample";
import Header from "../components/Header/Header";
import AlertExample from "../examples/AlertExample";
import ConfirmationPanelExample from "../examples/ConfirmationPanelExample";
import TagExample from "../examples/TagExample";
import IngressExample from "../examples/IngressExample";
import ReadMoreExample from "../examples/ReadMoreExample";
import StepperExample from "../examples/StepperExample";
import ToggleGroupExample from "../examples/ToggleGroupExample";
import SearchExample from "../examples/SearchExample";
import DatePickerExample from "../examples/DatePickerExample";
import PopoverExample from "../examples/PopoverExample";
import ErrorSummaryExample from "../examples/ErrorSummaryExample";
import SwitchExample from "../examples/SwitchExample";
import TableExample from "../examples/TableExample";
import TabsExample from "../examples/TabsExample";
import TooltipExample from "../examples/TooltipExample";
import PanelExample from "../examples/PanelExample";
import GuidePanelExample from "../examples/GuidePanel";
import HelpTextExample from "../examples/HelpTextExample";
import LinkPanelExample from "../examples/LinkPanelExample";
import ModalExample from "../examples/ModalExample";
import HeadingExample from "../examples/HeadingExample";
import LinkExample from "../examples/LinkExample";
import TableSortableExample from "../examples/TableSortableExample";
import TableExpandableExample from "../examples/TableExpandableExample";
import TableSelectableExample from "../examples/TableSeletable";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Design - arbeidsplassen.no</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        variant="person"
        onLogin={() => {}}
        onLogout={() => {}}
        authenticationStatus="is-authenticated"
        active="ledige-stillinger"
        userName="Navn Navnesen"
      />
      <main className="dsa-header-offset page-margin-top-and-bottom">
        <article className="container-small">
          <Heading level="1" size="xlarge" spacing>
            Superrask søknad – en enklere måte å komme i kontakt med bedrifter
          </Heading>
          <BodyLong spacing>
            Vi har gjort det lettere for deg å søke på jobber og komme i kontakt
            med interessante bedrifter. Med noen få tastetrykk på mobil,
            nettbrett eller laptop kan du raskt vise frem din erfaring og at du
            er rett person til jobben. Det er enkelt å se hvilke stillinger som
            har superrask søknad da disse er merket med «superrask søknad» i
            stillingssøket på arbeidsplassen.no.
          </BodyLong>

          <BodyLong spacing>
            Når du velger å søke med en superrask søknad, er det lagt opp til at
            du får beskjed fra bedriften om du er aktuell eller ikke. Du får
            denne beskjeden på e-post, så det er viktig at du er nøye når du
            legger inn kontaktinformasjonen din.
          </BodyLong>

          <Heading level="2" size="medium" spacing>
            Ingen CV eller langt søknadsbrev
          </Heading>
          <BodyLong spacing>
            Du svarer kun ut på de kvalifikasjoner bedriften legger vekt på i
            stillingen. Du har mulighet til å skrive en kort begrunnelse om
            hvorfor akkurat du passer til jobben.
          </BodyLong>

          <Heading level="2" size="medium" spacing>
            Du får beskjed
          </Heading>
          <ul>
            <li>
              <BodyLong>
                Du kan når som helst trekke tilbake din søknad og informasjonen
                du har oppgitt.
              </BodyLong>
            </li>
            <li>
              <BodyLong>
                Vi sletter all innsendt informasjon 3 måneder etter utgått frist
                på stillingsannonsen.
              </BodyLong>
            </li>
          </ul>

          <Heading level="3" size="small" spacing>
            Personvernerklæringen
          </Heading>
          <BodyLong spacing>
            Les også personvernerklæringen for superrask søknad. Superrask
            søknad er en helt ny løsning på arbeidsplassen.no. Prøv det og gi
            oss gjerne en tilbakemelding på hvordan du synes det fungerte. Lykke
            til med jobbsøkingen!
          </BodyLong>

          <Heading level="3" size="small" spacing>
            Tilbakemelding
          </Heading>
          <BodyLong>
            Superrask søknad er en helt ny løsning på arbeidsplassen.no. Prøv
            det og gi oss gjerne en tilbakemelding på hvordan du synes det
            fungerte. Lykke til med jobbsøkingen!
          </BodyLong>
        </article>
      </main>
      <Footer />
    </div>
  );
}
