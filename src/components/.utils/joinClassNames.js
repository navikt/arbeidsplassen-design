function joinClassNames(...strings) {
  return strings.filter((x) => typeof x === "string" && x.length > 0).join(" ");
}

export default joinClassNames;
