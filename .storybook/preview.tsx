import type { Preview, Decorator } from "@storybook/react";
import { Theme } from "@navikt/ds-react";
import "@navikt/ds-css";
import "../src/packages/arbeidsplassen-css/index.css";
import "../src/packages/arbeidsplassen-theme/index.css";
import { Controls, Description, Primary, Stories, Subtitle, Title } from "@storybook/addon-docs/blocks";

const withTheme: Decorator = (Story, context) => {
    const darkMode = context.globals["darkMode"] === "dark";
    return (
        <Theme theme={darkMode ? "dark" : "light"}>
            <div style={{ padding: "3rem" }}>
                <Story />
            </div>
        </Theme>
    );
};

const preview: Preview = {
    globalTypes: {
        darkMode: {
            description: "Dark mode",
            defaultValue: "light",
            toolbar: {
                title: "Dark mode",
                icon: "moon",
                items: [
                    { value: "light", title: "Light" },
                    { value: "dark", title: "Dark" },
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [withTheme],
    parameters: {
        layout: "fullscreen",
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <Controls />
                    <Stories includePrimary={false} />
                </>
            ),
        },
    },
};

export default preview;
