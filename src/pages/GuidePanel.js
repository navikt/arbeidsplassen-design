import { BodyLong, GuidePanel, Heading } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const GuidePanelExample = () => {
    return (
        <Layout title="GuidePanel">
            <GuidePanel poster className="mb-16">
                <div className="arb-guide-panel-lofsty">
                    <Heading size="medium" level="3" spacing className="text-center mb-8">
                        Slik fungerer det
                    </Heading>

                    <Heading size="small" level="4" spacing>
                        Ingen CV eller langt søknadsbrev
                    </Heading>
                    <BodyLong spacing>
                        Du svarer kun på de kvalifikasjoner som bedriften legger vekt på i stillingen.
                    </BodyLong>

                    <Heading size="small" level="3" spacing>
                        Vis frem deg selv{" "}
                    </Heading>
                    <BodyLong spacing>
                        Du har mulighet til å skrive en begrunnelse om hvorfor akkurat du passer til stillingen.
                    </BodyLong>

                    <Heading size="small" level="3" spacing>
                        Du får beskjed{" "}
                    </Heading>
                    <BodyLong spacing>
                        Uansett om bedriften ønsker å ta kontakt med deg eller ikke, gir vi deg en tilbakemelding på
                        e-post sånn at du ikke går og lurer.
                    </BodyLong>

                    <Heading size="small" level="3" spacing>
                        Du har kontroll på dine data{" "}
                    </Heading>
                    <BodyLong>
                        Du søker kun med relevant informasjon for stillingen og kan når som helst trekke tilbake din
                        søknad og informasjonen du har oppgitt.
                    </BodyLong>
                </div>
            </GuidePanel>

            <GuidePanel>
                <Heading size="small" level="3" spacing>
                    Du har kontroll på dine data{" "}
                </Heading>
                <BodyLong>
                    Du har mulighet til å skrive en begrunnelse om hvorfor akkurat du passer til stillingen.
                </BodyLong>
            </GuidePanel>
        </Layout>
    );
};

export default GuidePanelExample;
