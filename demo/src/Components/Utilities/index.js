export function dashCase(string) {
  return string.replace(" ", "-");
}

export function testRegex(regex, string) {
  if (string === "") return false;
  const r = new RegExp(regex.replace(/\\(.)/g, "$1"));

  return r.test(string);
}
