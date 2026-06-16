# Arbeidsplassen designsystem

Dette repoet inneholder designsystemet for [arbeidsplassen.nav.no](https://arbeidsplassen.nav.no) - tema, CSS-stiler og React-komponenter som bygger på [Aksel](https://aksel.nav.no/), NAVs felles designsystem.

**For deg som designer:** Bla gjennom komponentene i Storybook (menyen til venstre).  
**For deg som utvikler:** Se installasjonsveiledningen nedenfor.

---

## Innhold

| Pakke                                 | Innhold                                                                                                                                                  |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@navikt/arbeidsplassen-react`        | React-komponenter: `Header`, `Footer`, `CookieBanner`, `LoginPage`, `NotFound`, `SkipLink`, `CheckboxField`, `Feedback`, `RichText`, illustrasjoner m.m. |
| `@navikt/arbeidsplassen-css`          | CSS for alle komponentene og arbeidsplassen-temaet                                                                                                       |
| `@navikt/ds-react` + `@navikt/ds-css` | Aksel-komponenter (`Button`, `TextField`, `Select` osv.) med arbeidsplassen-farger                                                                       |

---

## For designere

Alle komponenter har egne sider i Storybook med:

- **Canvas** - interaktive eksempler med kontrollerbare props
- **Docs** - automatisk generert API-dokumentasjon

Se sidene under **Arbeidsplassen** i menyen for egne komponenter, og **Aksel** for felles NAV-komponenter.

---

## For utviklere

### 1. Tilgang til `@navikt`-pakker

Prosjektet bruker `@navikt`-pakker fra [GitHub Packages](https://github.com/orgs/navikt/packages). Du trenger en **Personal Access Token (PAT)** med `read:packages`-tilgang. Har du allerede en fra et annet Nav-prosjekt, kan du gjenbruke den.

**Opprett PAT** (hvis du ikke har en): Gå til [github.com/settings/tokens](https://github.com/settings/tokens) → classic token med `read:packages` → velg **"Authorize token"** under **"Configure SSO"** for `@navikt`.

**Sett `NODE_AUTH_TOKEN`** i shell-profilen din (`~/.zshrc` eller `~/.bashrc`):

```bash
export NODE_AUTH_TOKEN="ghp_ditt_token_her"
```

Åpne en ny terminal eller kjør `source ~/.zshrc`.

> ⚠️ Lagre aldri et faktisk token direkte i `~/.npmrc` eller i shell-historikk.

### 2. Installasjon

```bash
pnpm add @navikt/ds-react @navikt/ds-css @navikt/arbeidsplassen-react @navikt/arbeidsplassen-css
```

#### Zod er et peer-dependency

`@navikt/arbeidsplassen-react` bruker [Zod](https://zod.dev/) til validering, men inkluderer det ikke selv. Installer Zod v4 i applikasjonen din:

```bash
pnpm add zod
```

### 3. Legg til tema

Arbeidsplassen-temaet aktiveres med et `data`-attributt på `<body>` (eller annet rotnivå-element):

```html
<body data-theme="arbeidsplassen">
```

### 4. Importer CSS

I rotfilen din (f.eks. `app.tsx` eller `_app.tsx`):

```ts
import "@navikt/ds-css";
import "@navikt/arbeidsplassen-css";
```

### 5. Bruk komponenter

```tsx
// Egne arbeidsplassen-komponenter
import { Header, Footer, CookieBanner } from "@navikt/arbeidsplassen-react";

// Aksel-komponenter
import { Button, TextField } from "@navikt/ds-react";
```

---

## Lokal utvikling

### Kjøre Storybook lokalt

```bash
pnpm install
pnpm storybook
```

Storybook kjører på [http://localhost:6006](http://localhost:6006).

### Kjøre UI-tester lokalt

```bash
pnpm test-storybook
```

Tester kjøres med Vitest + Playwright (Chromium) mot Storybook-stories.

---

## Publisere nye versjoner

Pakker publiseres manuelt via GitHub Actions.

### `@navikt/arbeidsplassen-react`

1. Oppdater `version` i `src/packages/arbeidsplassen-react/package.json`.
2. Kjør workflowen **Publish REACT package** under [Actions](https://github.com/navikt/arbeidsplassen-design/actions).

### `@navikt/arbeidsplassen-css`

1. Oppdater `version` i `src/packages/arbeidsplassen-css/package.json`.
2. Kjør workflowen **Publish CSS package** under [Actions](https://github.com/navikt/arbeidsplassen-design/actions).

---

## Feilsøking

### «Vite unexpectedly reloaded a test»

Tester bruker Vites dep-optimizer. Når en avhengighet ikke er pre-bundlet på forhånd, oppdager Vite den under kjøring og reloader - noe som dreper pågående tester:

```
[vitest] Vite unexpectedly reloaded a test. This may cause tests to fail,
lead to flaky behaviour or duplicated test runs.
Error: Vitest failed to find the current suite.
```

CI-loggen forteller deg hvilken pakke som mangler:

```
✨ new dependencies optimized: <pakkenavn>
✨ optimized dependencies changed. reloading
```

**Løsning:** Legg til den manglende pakken i `optimizeDeps.include` i `vite.config.ts`:

```ts
optimizeDeps: {
    entries: ["src/stories/**/*.stories.tsx"],
    include: [
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        // legg til <pakkenavn> her
    ]
}
```


## Bruker storybook for dokumentasjon

### Kjøre Storybook lokalt

```bash
pnpm storybook
```

Storybook kjører på [http://localhost:6006](http://localhost:6006)

### Kjøre UI-tester lokalt

```bash
pnpm test-storybook
```

Tester kjøres med Vitest + Playwright (Chromium) mot Storybook-stories.

### CI-tester feiler med "Vite unexpectedly reloaded a test"

Testen bruker Vite sin dep-optimizer. Når en avhengighet ikke er pre-bundlet på forhånd, oppdager Vite den under kjøring og reloader - noe som dreper pågående tester med feilmeldingen:

```
[vitest] Vite unexpectedly reloaded a test. This may cause tests to fail...
Error: Vitest failed to find the current suite.
```

CI-loggen forteller deg nøyaktig hvilken dep som mangler:

```
✨ new dependencies optimized: <pakkenavn>
✨ optimized dependencies changed. reloading
```

**Fix:** Legg til den manglende pakken i `optimizeDeps.include` i `vite.config.ts`:

```ts
optimizeDeps: {
    entries: ["src/stories/**/*.stories.tsx"],
    include: [
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        // legg til <pakkenavn> her
    ]
}
```