import trimAll from "trim-all";

/**
 * @param {string} namespace
 * @param {string[]} modifiers
 *
 * @return {Set<string>}
 */
export default function allClass(...params) {
  const modifiers = trimAll(params.join(" ")).split(" "),
    namespace = trimAll(params[0]) && modifiers.shift();
  let fullClass = namespace;
  return new Set(
    [namespace]
      .concat(
        modifiers.flatMap((modifier) => {
          if (modifier) {
            fullClass = fullClass ? fullClass + "-" + modifier : modifier;
            return [
              namespace ? namespace + "-" + modifier : modifier,
              fullClass,
            ];
          }
        })
      )
      .filter((item) => item)
  );
}
