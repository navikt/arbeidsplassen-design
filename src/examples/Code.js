export default function Code({ as, attributes, selfClosing }) {
  const attr = Object.keys(attributes).map((key) => {
    if (attributes[key] === true) {
      return key;
    }
    return `${key}="${attributes[key]}"`;
  });

  const markup = [...attr].join(" ").trim();

  return <code>{markup}</code>;
}
