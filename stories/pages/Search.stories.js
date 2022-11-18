import React from "react";
import Header, {
    HeaderAuthenticationStatus,
    HeaderRoutes,
    HeaderVariant,
} from "../../src/Header/Header";
import Footer from "../../src/Footer/Footer";
import Container from "../../src/Container/Container";
import Heading from "../../src/Heading/Heading";
import BodyText from "../../src/BodyText/BodyText";
import Anchor from "../../src/Anchor/Anchor";
import SmallText from "../../src/SmallText/SmallText";
import Accordion from "../../src/Accordion/Accordion";
import ListEntity, {
    ListEntityContent,
    ListEntityHeading,
    ListEntitySecondaryMenu,
} from "../../src/ListEntity/ListEntity";
import Label from "../../src/Label/Label";
import Button from "../../src/Button/Button";
import Heart from "../../src/Feather/Heart";
import XIcon from "../../src/Feather/XIcon";
import * as PropTypes from "prop-types";

export default {
    title: "Pages/Search",
    parameters: {
        layout: "fullscreen",
    },
};

const omrader = [
    "Agder (682)",
    "Innlandet (878)",
    "Møre og Romsdal (799)",
    "Nordland (1002)",
    "Oslo (2601)",
    "Rogaland (1178)",
    "Svalbard (9)",
    "Troms og Finnmark (1137)",
    "Trøndelag (1302)",
    "Vestfold og Telemark (1001)",
    "Vestland (1843)",
    "Viken (2886)",
    "Utland (43)",
];

const yrker = [
    "Helse og sosial (4129)",
    "Utdanning (2761)",
    "Kontor og økonomi (1984)",
    "Salg og service (2283)",
    "Håndverkere (1227)",
    "Reiseliv og mat (746)",
    "Industri og produksjon (646)",
    "IT (537)",
    "Bygg og anlegg (503)",
    "Transport og lager (591)",
    "Kultur og kreative yrker (322)",
    "Sikkerhet og beredskap (310)",
    "Natur og miljø (208)",
    "Uoppgitt/ ikke identifiserbare (67)",
];

const filters = ["Filter 1", "Filter 2", "Filter 3", "Filter 4"];

const stillinger = [
    {
        title: "Vil du være med å utgjøre en forskjell for barna i Teisentoppen barnehage?",
        position: "Barne- og ungdomsarbeider",
        company: "Frelsesarmeens Barnehager AS",
        location: "Oslo",
        applicationDue: "Snarest",
        published: "14. november 2022",
    },
    {
        title: "Økonomisk rådgiver eller regnskapsfører?",
        position: "Økonomisk rådgiver eller regnskapsfører",
        company: "SpareBank 1 Regnskapshuset Sørøst-Norge AS",
        location: "Drammen",
        applicationDue: "14. november 2022",
        published: "14. november 2022",
    },
];

const Checkbox = ({ children }) => (
    <div className="mb-1">
        <label>
            <input
                type="checkbox"
                style={{
                    transform: "scale(1.5)",
                    marginRight: "0.75rem",
                }}
            />
            {children}
        </label>
    </div>
);

export const Default = (args) => (
    <>
        <Header
            variant="person"
            authenticationStatus={HeaderAuthenticationStatus.NOT_AUTHENTICATED}
            active={HeaderRoutes.STILLIGER}
        />
        <main className="dsa-header-offset">
            <Container className="gt-2 gb-2">
                <div style={{ display: "flex", gap: "var(--gutter)" }}>
                    <div style={{ flex: "1" }}>
                        <Heading level="1" size="large" className="gb-1">
                            Søk i ledige stillinger
                        </Heading>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            <label>Skriv et eller flere søkeord</label>
                            <input
                                type="text"
                                className="mb-2"
                                style={{ padding: "0.75rem" }}
                            />
                        </div>

                        <Accordion title="Område">
                            {omrader.map((it) => (
                                <Checkbox>{it}</Checkbox>
                            ))}
                        </Accordion>
                        <Accordion title="Yrke">
                            {yrker.map((it) => (
                                <Checkbox>{it}</Checkbox>
                            ))}
                        </Accordion>
                        <Accordion title="Publisert">
                            {filters.map((it) => (
                                <Checkbox>{it}</Checkbox>
                            ))}
                        </Accordion>
                        <Accordion title="Heltid/deltid">
                            {filters.map((it) => (
                                <Checkbox>{it}</Checkbox>
                            ))}
                        </Accordion>
                        <Accordion title="Ansettelsesform">
                            {filters.map((it) => (
                                <Checkbox>{it}</Checkbox>
                            ))}
                        </Accordion>
                        <Accordion title="Sektor">
                            {filters.map((it) => (
                                <Checkbox>{it}</Checkbox>
                            ))}
                        </Accordion>

                        <div
                            style={{
                                display: "flex",
                                gap: "1rem",
                            }}
                            className="mt-2"
                        >
                            <Button variant="secondary">Lagre søk</Button>
                            <Button variant="secondary" icon={<XIcon />}>
                                Nullstill søk
                            </Button>
                        </div>
                    </div>
                    <div style={{ flex: "2" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                            className="gb-1"
                        >
                            <BodyText level="2" size="small">
                                <b>6</b> stillinger i <b>{stillinger.length}</b>{" "}
                                annonser
                            </BodyText>
                            <div>
                                <label>Sorter etter</label>
                                <select>
                                    <option>Nyeste øverst</option>
                                </select>
                            </div>
                        </div>
                        {stillinger.concat(stillinger).map((ad) => (
                            <ListEntity className="mb-2">
                                <ListEntityHeading>
                                    <Heading
                                        level="3"
                                        size="small"
                                        className="mb-0_5"
                                    >
                                        <Anchor href="#">{ad.title}</Anchor>
                                    </Heading>
                                </ListEntityHeading>
                                <ListEntityContent>
                                    <Label className="mb-1">
                                        {ad.position}
                                    </Label>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "1.5rem",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <div>
                                            <Label mini className="mb-0_25">
                                                Bedrift
                                            </Label>
                                            <SmallText>{ad.company}</SmallText>
                                        </div>
                                        <div>
                                            <Label mini className="mb-0_25">
                                                Sted
                                            </Label>
                                            <SmallText>{ad.location}</SmallText>
                                        </div>
                                        <div>
                                            <Label mini className="mb-0_25">
                                                Frist
                                            </Label>
                                            <SmallText>
                                                {ad.applicationDue}
                                            </SmallText>
                                        </div>
                                        <div>
                                            <Label mini className="mb-0_25">
                                                Publisert
                                            </Label>
                                            <SmallText>
                                                {ad.published}
                                            </SmallText>
                                        </div>
                                    </div>
                                </ListEntityContent>
                                <ListEntitySecondaryMenu>
                                    <Button variant="tertiary" icon={<Heart />}>
                                        Lagre
                                    </Button>
                                </ListEntitySecondaryMenu>
                            </ListEntity>
                        ))}

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                            className="gt-2"
                        >
                            <Button variant="secondary">Se flere</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
        <Footer />
    </>
);
