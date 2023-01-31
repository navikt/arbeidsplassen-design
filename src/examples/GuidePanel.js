import {BodyLong, GuidePanel, Heading, Ingress} from "@navikt/ds-react";

const Icon = () => {
    return (
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="48" cy="48" r="48" fill="#90E8C3"/>
            <g clipPath="url(#clip0_1_10)">
                <ellipse cx="34.7609" cy="44.5" rx="7.76087" ry="11.5" fill="white"/>
                <ellipse cx="31.1087" cy="44.5" rx="4.1087" ry="7.07692" fill="#024B62"/>
                <ellipse cx="61.2391" cy="44.5" rx="7.76087" ry="11.5" fill="white"/>
                <ellipse cx="57.587" cy="44.5" rx="4.1087" ry="7.07692" fill="#024B62"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M55.3491 68.1294C55.4892 68.631 55.2053 69.1537 54.7152 69.297C54.4143 69.3849 54.0957 69.4836 53.7606 69.5874C50.6227 70.5592 46.0418 71.9779 41.0965 69.218C40.6489 68.9682 40.484 68.3946 40.7281 67.9366C40.9722 67.4787 41.533 67.31 41.9805 67.5598C46.2131 69.9219 50.0558 68.7465 53.2249 67.7772C53.5602 67.6746 53.888 67.5743 54.208 67.4808C54.6982 67.3375 55.2091 67.6279 55.3491 68.1294Z"
                  fill="#024B62"/>
            <path
                d="M50.3077 60.8333C50.3077 62.3981 49.2745 63.6667 48 63.6667C46.7255 63.6667 45.6923 62.3981 45.6923 60.8333C45.6923 59.2685 46.7255 58 48 58C49.2745 58 50.3077 59.2685 50.3077 60.8333Z"
                fill="#024B62"/>
            <defs>
                <clipPath id="clip0_1_10">
                    <rect width="42" height="23" fill="white" transform="translate(27 33)"/>
                </clipPath>
            </defs>
        </svg>

    )
}

const GuidePanelExample = () => {
    return (
        <div>
            <GuidePanel poster illustration={<Icon/>} className="mb-4">
                <div className="dsa-guide-panel-content">
                    <Heading size="medium" level="3" spacing className="text-center mb-2">
                        Slik fungerer det
                    </Heading>

                    <Heading size="small" level="4" spacing>Ingen CV eller langt søknadsbrev</Heading>
                    <BodyLong spacing>
                        Du svarer kun på de kvalifikasjoner som bedriften legger vekt på i stillingen.
                    </BodyLong>

                    <Heading size="small" level="3" spacing>Vis frem deg selv </Heading>
                    <BodyLong spacing>
                        Du har mulighet til å skrive en begrunnelse om hvorfor akkurat du passer til stillingen.
                    </BodyLong>

                    <Heading size="small" level="3" spacing>Du får beskjed </Heading>
                    <BodyLong spacing>
                        Uansett om bedriften ønsker å ta kontakt med deg eller ikke, gir vi deg en tilbakemelding
                        på e-post sånn at du ikke går og lurer.
                    </BodyLong>

                    <Heading size="small" level="3" spacing>Du har kontroll på dine data </Heading>
                    <BodyLong>
                        Du søker kun med relevant informasjon for stillingen og kan når som helst trekke tilbake
                        din søknad og informasjonen du har oppgitt.
                    </BodyLong>
                </div>
            </GuidePanel>

            <GuidePanel illustration={<Icon/>}>
                <Heading size="small" level="3" spacing>Du har kontroll på dine data </Heading>
                <BodyLong>
                    Du har mulighet til å skrive en begrunnelse om hvorfor akkurat du passer til stillingen.
                </BodyLong>
            </GuidePanel>
        </div>
    );
};

export default GuidePanelExample;