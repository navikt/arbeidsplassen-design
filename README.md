# Arbeidsplassen design

In this repo we maintain a shared CSS and HTML implementation of components used across Arbeidsplassen.

You can copy the CSS and HTML into your project and adjust it to your framework.

## How to run local

There is no npm install as you may be used to. For now we just work directly on the css and html files.

- Clone this repository
- Open `index.html` in your browser. This can be done from your file system or your code editor.

## File structure

- All components are stored under `/components`. For every compontent there is a css file and one or more html files
  showing expected markup.
- Examples are stored under `/examples`

## Code style

- To avoid css naming conflicts, all css selectors are prefixed with
  `arbeidsplassen-`, for example `arbeidsplassen-button`
- Class names follows BEM-syntax
- In the example files we must avoid mixing css from the components with styles specific to the example docs itself.
  When writing documentation you should use the `x-` classes defined in examples.css. For example `x-h1`