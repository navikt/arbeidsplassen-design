import { create } from "storybook/theming/create";

export default create({
    base: "light",
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: "monospace",
    brandTitle: "My custom Storybook",
    brandUrl: "https://example.com",
    brandImage: "https://arbeidsplassen.nav.no/images/arbeidsplassen-logo.png",
    brandTarget: "_self",

    //
    colorPrimary: "#028088",
    colorSecondary: "#3c59e2",

    // UI
    appBg: "#ffffff",
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    //appBorderColor: "#585C6D",
    appBorderRadius: 4,

    appHoverBg: "#90A1EE",
    // Text colors
    textColor: "#10162F",
    textInverseColor: "#ffffff",

    // Toolbar default and active colors
    barTextColor: "#9E9E9E",
    barSelectedColor: "#3c59e2",
    barHoverColor: "#1e3cc7",
    barBg: "#ffffff",

    // Form colors
    inputBg: "#ffffff",
    inputBorder: "#10162F",
    inputTextColor: "#10162F",
    inputBorderRadius: 2,
});
