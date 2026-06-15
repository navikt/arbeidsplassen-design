import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(ts|tsx)"],
    addons: ["@storybook/addon-a11y", "@storybook/addon-designs", "@storybook/addon-vitest", "@storybook/addon-docs"],
    staticDirs: ["../public"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    viteFinal: async (config) => {
        // Automatisk JSX-runtime — slipper `import React` i alle filer
        config.esbuild = {
            ...config.esbuild,
            jsx: "automatic",
            jsxImportSource: "react",
        };

        config.resolve ??= {};
        config.resolve.alias = {
            ...(config.resolve.alias as Record<string, string>),
            // Pek direkte på TypeScript-kilde for bedre HMR i utvikling
            "@navikt/arbeidsplassen-react": path.resolve(__dirname, "../src/packages/arbeidsplassen-react/index.ts"),
        };
        return config;
    },
};

export default config;
