Vi bruker ikoner fra Feather https://feathericons.com/

Når du legger inn en ny svg, så er det en fordel for skjermlesere om du også legger til
noen ekstra felter: `role="img"`, `aria-hidden`, `aria-label`, og `<title>`.

```
<svg
   role="img"
   aria-hidden={ariaHidden}
   aria-label={title}
   ...
>
   <title>{title}</title>
   ...
</svg>
```
