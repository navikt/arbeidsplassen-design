# Arbeidsplassen design

In this repo we maintain a shared CSS and HTML implementation of components used across Arbeidsplassen.

You can copy the CSS and HTML into your project and adjust it to your framework.

## How to run local

There is no npm install as you may be used to. For now we just work directly on the css and html files.

## File structure

- All components are stored under `/components`. For every compontent there is a css file and one or more html files
  showing expected markup.

## Code style

- To avoid css classname conflicts, all css selectors are prefixed with
  `dsa-`, for example `dsa-button`
- Classnames follows BEM-syntax
