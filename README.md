```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hvordan få tilgang til @navikt/arbeidsplassen-design i et annet prosjekt

Opprett fila `.npmrc` i hjemkatalogen din. F.eks. `~/.npmrc` Mer info: https://docs.npmjs.com/cli/v9/configuring-npm/npmrc

Legg til følgende i fila

```
@navikt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=$TOKEN
```

Opprett et token med "read:packages" rettigheter. [https://github.com/settings/tokens](https://github.com/settings/tokens) Bytt ut \$TOKEN med tokenet du akkurat opprettet. Velg Authorize token under "Configure SSO" for å gi tokenet tilgang til @navikt.

Ikke sjekk inn `.npmrc` til GitHub.

Mer informasjon om autentisering: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token

## Hvordan publisere (REACT)

Endre `version` i `src/packages/arbeidsplassen-react/package.json` til ny versjon du ønsker å publisere. Kjør `Publish REACT package` workflow under fanen `Actions` på repositoryet på Github. https://github.com/navikt/arbeidsplassen-design/actions

## Hvordan publisere (CSS)

Endre `version` i `src/packages/arbeidsplassen-css/package.json` til ny versjon du ønsker å publisere. Kjør `Publish CSS package` workflow under fanen `Actions` på repositoryet på Github. https://github.com/navikt/arbeidsplassen-design/actions
