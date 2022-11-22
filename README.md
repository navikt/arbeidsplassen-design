# Arbeidsplassen design

Dette repoet består av komponenter, og en underkomponent med CSS. Begge kan publiseres på GPR.

## Hvordan kjøre prosjektet lokalt

```
npm install
npm start
```

## Hvordan få tilgang til @navikt/arbeidsplassen-design i et annet prosjekt

Opprett fila `.npmrc` i rotkatalogen på prosjektet.

Legg til følgende i fila

```
@navikt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=$TOKEN
```

Opprett et token med "read:packages" rettigheter. [https://github.com/settings/tokens](https://github.com/settings/tokens) Bytt ut \$TOKEN med tokenet du akkurat opprettet. Velg Authorize token under "Configure SSO" for å gi tokenet tilgang til @navikt.

Ikke sjekk inn `.npmrc` til GitHub.

## Hvordan publisere (KOMPONENTER)

Endre `version` i `package.json` til ny versjon du ønsker å publisere. Kjør `Publish package` workflow under fanen `Actions` på repositoryet på Github.

## Hvordan publisere (CSS)

Endre `version` i `css/package.json` til ny versjon du ønsker å publisere. Kjør `Publish CSS package` workflow under fanen `Actions` på repositoryet på Github.
