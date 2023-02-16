## Hvordan ta i bruk designsystemet i ditt prosjekt

Vi bruker design-komponentene til [Aksel](https://aksel.nav.no/) med vår egen "theme" som endrer farger og noen
utvalgte css-variabler. I tillegg har vi noen egne React-komponenter, slik som `Header` og `Footer`

**Installasjon**
```bash
npm install @navikt/ds-react @navikt/ds-css @navikt/arbeidsplassen-react @navikt/arbeidsplassen-css  
```

**Bruk**

Legg til `data-theme="arbeidsplassen"` på for eksempel `body` i koden for å aktivere arbeidsplassen
sitt "theme".

```
import "@navikt/arbeidsplassen-css";
import { Header } from "@navikt/arbeidsplassen-css";
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Hvordan få tilgang til @navikt/arbeidsplassen-react og  @navikt/arbeidsplassen-css i et annet prosjekt**

Opprett fila `.npmrc` i hjemkatalogen din. F.eks. `~/.npmrc` Mer info: https://docs.npmjs.com/cli/v9/configuring-npm/npmrc

Legg til følgende i fila

```
@navikt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=$TOKEN
```

Opprett et token med "read:packages" rettigheter. [https://github.com/settings/tokens](https://github.com/settings/tokens) Bytt ut \$TOKEN med tokenet du akkurat opprettet. Velg Authorize token under "Configure SSO" for å gi tokenet tilgang til @navikt.

Ikke sjekk inn `.npmrc` til GitHub.

Mer informasjon om autentisering: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token

## Kjøre eksempel-appen lokalt
For å kunne utvikle og teste css og egne komponenter har vi en Next.js app som viser alle komponentene våre

```bash
npm install
npm run dev
```

## Hvordan publisere (REACT)

Endre `version` i `src/packages/arbeidsplassen-react/package.json` til ny versjon du ønsker å publisere. Kjør `Publish REACT package` workflow under fanen `Actions` på repositoryet på Github. https://github.com/navikt/arbeidsplassen-design/actions

## Hvordan publisere (CSS)

Endre `version` i `src/packages/arbeidsplassen-css/package.json` til ny versjon du ønsker å publisere. Kjør `Publish CSS package` workflow under fanen `Actions` på repositoryet på Github. https://github.com/navikt/arbeidsplassen-design/actions
