import Link from "next/link";
import { BodyLong, Heading, HGrid, Link as AkselLink } from "@navikt/ds-react";
import { CookieBanner, CookieBannerA, CookieBannerB, Header, SkipLink } from "@navikt/arbeidsplassen-react";
import Footer from "@/packages/arbeidsplassen-react/Footer/Footer";

const arbeidsplassenComponents = [
    "ComboboxExternalItems",
    "CookieBanner",
    "CookieBannerA",
    "CookieBannerB",
    "FeedbackButton",
    "Header",
    "Illustrations",
    "LoginPage",
    "NotFound",
    "RichText",
    "SkipLink",
    "Colors",
].sort();

const deprecatedAkselComponents = ["Alert", "ConfirmationPanel", "Ingress", "LinkPanel"];

const akselComponents = [
    "Accordion",
    "ActionMenu",
    "Button",
    "Checkbox",
    "Chips",
    "ComboBox",
    "CopyButton",
    "DatePicker",
    "Dropdown",
    "ErrorSummary",
    "FormProgress",
    "GlobalAlert",
    "GuidePanel",
    "Heading",
    "HelpText",
    "Link",
    "LinkCard",
    "List",
    "Modal",
    "Pagination",
    "Popover",
    "Radio",
    "ReadMore",
    "Search",
    "Select",
    "Stepper",
    "Switch",
    "Table",
    "Tabs",
    "Tag",
    "Textarea",
    "TextField",
    "ToggleGroup",
    "Tooltip",
    "Typography",
].sort();

export default function Layout({
    children,
    title,
    headerArgs,
    cookieBannerArgs,
    cookieBannerAArgs,
    cookieBannerBArgs,
}) {
    headerArgs = {
        onLogin: console.log,
        onLogout: console.log,
        ...headerArgs,
    };
    return (
        <>
            <div className="arb-push-footer-down">
                {cookieBannerArgs && <CookieBanner headingLevel="2" onClose={cookieBannerArgs.onClose} />}
                {cookieBannerAArgs && <CookieBannerA headingLevel="2" onClose={cookieBannerAArgs.onClose} />}
                {cookieBannerBArgs && <CookieBannerB headingLevel="2" onClose={cookieBannerBArgs.onClose} />}
                <SkipLink />
                <Header
                    variant={headerArgs.variant}
                    authenticationStatus={headerArgs.authenticationStatus}
                    active={headerArgs.active}
                    onLogin={headerArgs.onLogin}
                    onLogout={headerArgs.onLogout}
                />
                <main id="main" className="container-large mt-8 mb-24">
                    <HGrid columns={{ md: "auto auto", lg: "350px auto" }}>
                        <div>
                            <Heading size="xsmall" level="3" spacing>
                                Arbeidsplassen components
                            </Heading>
                            <ul>
                                {arbeidsplassenComponents.map((it) => (
                                    <li key={it}>
                                        <BodyLong>
                                            <AkselLink as={Link} href={`/${it}`}>
                                                {it}
                                            </AkselLink>
                                        </BodyLong>
                                    </li>
                                ))}
                            </ul>

                            <Heading size="xsmall" level="3" spacing>
                                Aksel components
                            </Heading>
                            <ul>
                                {akselComponents.map((it) => (
                                    <li key={it}>
                                        <BodyLong>
                                            <AkselLink as={Link} href={`/${it}`}>
                                                {it}
                                            </AkselLink>
                                        </BodyLong>
                                    </li>
                                ))}
                            </ul>

                            <Heading size="xsmall" level="3" spacing>
                                Avviklet
                            </Heading>
                            <ul>
                                {deprecatedAkselComponents.map((it) => (
                                    <li key={it}>
                                        <BodyLong>
                                            <AkselLink as={Link} href={`/${it}`}>
                                                {it}
                                            </AkselLink>
                                        </BodyLong>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <Heading size="xlarge" level="1" spacing>
                                {title}
                            </Heading>
                            {children}
                        </div>
                    </HGrid>
                </main>
            </div>
            <Footer />
        </>
    );
}
