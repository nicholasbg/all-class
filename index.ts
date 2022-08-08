import trimAll from "trim-all";

export default function allClass(
  ...params: [namespace: string, ...modifiers: Array<string>]
): Set<string> {
  const modifiers = trimAll(params.join(" ")).split(" "),
    namespace = trimAll(params[0]) && (modifiers.shift() as string);
  let fullClass = namespace;
  return new Set(
    [
      namespace,
      ...modifiers.flatMap((modifier) =>
        modifier
          ? [
              namespace ? namespace + "-" + modifier : modifier,
              (fullClass = fullClass ? fullClass + "-" + modifier : modifier),
            ]
          : []
      ),
    ].filter((item) => item)
  );
}
