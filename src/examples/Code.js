export default function Code({ as, attributes, selfClosing }) {
  const attr = Object.keys(attributes).map((key) => {
    if (attributes[key] === true) {
      return key;
    }
    return `${key}="${attributes[key]}"`;
  });

  const markup = [as, ...attr, selfClosing ? "/" : ""].join(" ").trim();

  return <code>&lt;{markup}&gt;</code>;
}
