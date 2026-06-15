import { defineConfig } from "vite";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    esbuild: {
        jsx: "automatic",
        jsxImportSource: "react",
    },
    resolve: {
        alias: {
            "@navikt/arbeidsplassen-react": path.resolve(__dirname, "src/packages/arbeidsplassen-react/index.ts"),
        },
    },
    optimizeDeps: {
        entries: ["src/stories/**/*.stories.tsx"],
        include: [
            "react",
            "react/jsx-runtime",
            "react/jsx-dev-runtime",
            "@navikt/ds-react",
            "@navikt/ds-react/Page",
            "@navikt/aksel-icons",
            "storybook/preview-api",
            "storybook/test",
            "zod",
        ],
    },
    test: {
        projects: [
            {
                extends: true,
                plugins: [
                    storybookTest({ configDir: path.resolve(__dirname, ".storybook") }),
                ],
                test: {
                    name: "storybook",
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright(),
                        instances: [{ browser: "chromium" }],
                    },
                    setupFiles: [],
                },
            },
        ],
    },
});
