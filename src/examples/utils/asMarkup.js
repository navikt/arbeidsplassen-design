export default function asMarkup(as, props, selfClosing) {
  const attr = Object.keys(props).map((key) => {
    if (props[key] === true) {
      return key;
    }
    return `${key}="${props[key]}"`;
  });

  const markup = [as, ...attr, selfClosing ? "/" : ""].join(" ").trim();

  return <code>&lt;{markup}&gt;</code>;
}
