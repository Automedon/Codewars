/*
Description:
In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

Example: abbreviation => a2b2revi2ton
*/
const transform = s => {
  return [
    ...new Set(
      [...s].map(
        v =>
          v +
          ([...s].filter(x => x === v).length > 1
            ? [...s].filter(x => x === v).length
            : "")
      )
    )
  ].join``;
};
