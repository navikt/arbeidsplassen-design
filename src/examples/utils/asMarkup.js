export default function asMarkup(as, props, selfClosing) {
  const keys = Object.keys(props);
  let p = "";
  keys.forEach((key) => {
    if (props[key] === true) {
      p += ` ${key}`;
    } else p += ` ${key}="${props[key]}"`;
  });

  return (
    <code>
      &lt;{as}
      {p}
      {selfClosing && " /"}&gt;
    </code>
  );
}
