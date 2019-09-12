function changeCode(code) {
  const defaultPatt = /^\s*exports\.default\s*=/gm;
  const otherPatt = /^\s*exports\.\S+\s*=/gm;
  const isDefaultExist = defaultPatt.test(code);
  const matchedSnippets = code.match(otherPatt);
  if (!isDefaultExist) return code;
  if (matchedSnippets.length !== 1) return code;
  return code.replace(otherPatt, "module.exports=");
}

module.exports = changeCode;
