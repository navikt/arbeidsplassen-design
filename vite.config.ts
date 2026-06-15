import { defineConfig } from "vite";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
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
