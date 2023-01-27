import Head from 'next/head'
import "@navikt/ds-css";
import {BodyLong, Heading} from "@navikt/ds-react";
import ChipsExample from "../examples/ChipsExample";
import AccordionExample from "../examples/AccordionExample";
import Footer from "../examples/Footer";
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
import PaginationExample from "../examples/PaginationExample";
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

export default function Home() {
    return (
        <div>
            <Head>
                <title>Design - arbeidsplassen.no</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header variant="person" onLogin={() => {}} onLogout={() => {}} authenticationStatus="not-authenticated"/>
            <main className="dsa-header-offset">
                <div className="container mt-4">
                    <section className="mb-4">
                        <HeadingExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Ingress
                        </Heading>
                        <IngressExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            BodyLong
                        </Heading>
                        <BodyLong spacing>
                            One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in
                            his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a
                            little he could see his brown belly, slightly domed and divided by arches into stiff
                            sections.
                        </BodyLong>
                        <BodyLong>
                            Magna aliqua et adipisicing nostrud elit ea. Id ipsum ut laborum ut
                            adipisicing magna laboris pariatur commodo quis nulla ea aliquip mollit.
                            Nisi aliquip voluptate laboris nisi eiusmod labore eu non.
                        </BodyLong>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Link
                        </Heading>
                        <LinkExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            GuidePanel
                        </Heading>
                        <GuidePanelExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Button
                        </Heading>
                        <ButtonExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            TextField
                        </Heading>
                       <TextFieldExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Select
                        </Heading>
                        <SelectExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Textarea
                        </Heading>
                        <TextareaExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Search
                        </Heading>
                        <SearchExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Checkbox
                        </Heading>
                        <CheckboxExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Radio
                        </Heading>
                        <RadioExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            DatePicker
                        </Heading>
                        <DatePickerExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Switch
                        </Heading>
                        <SwitchExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            ConfirmationPanel
                        </Heading>
                        <ConfirmationPanelExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            ErrorSummary
                        </Heading>
                        <ErrorSummaryExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Chips
                        </Heading>
                        <ChipsExample/>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Tag
                        </Heading>
                        <TagExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Stepper
                        </Heading>
                        <StepperExample/>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            ToggleGroup
                        </Heading>
                        <ToggleGroupExample/>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Tabs
                        </Heading>
                        <TabsExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Popover
                        </Heading>
                        <PopoverExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Tooltip
                        </Heading>
                        <TooltipExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            HelpText
                        </Heading>
                        <HelpTextExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Panel
                        </Heading>
                        <PanelExample/>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            LinkPanel
                        </Heading>
                        <LinkPanelExample />
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            ReadMore
                        </Heading>
                        <ReadMoreExample/>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Accordion
                        </Heading>
                        <AccordionExample/>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Alert
                        </Heading>
                        <AlertExample/>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Modal
                        </Heading>
                        <ModalExample/>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Table
                        </Heading>
                        <TableExample/>
                    </section>

                    <section className="mb-4">
                        <Heading level="2" size="large" spacing>
                            Pagination
                        </Heading>
                        <PaginationExample />
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}
