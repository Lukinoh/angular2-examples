
export const addCounter = (list: number[]): number[] => {
  // return list.concat([0]);
  return [...list, 0];
};

export const removeCounter = (list: number[], index: number): number[] => {
  // return list
  //   .slice(0, index)
  //   .concat(list.slice(index + 1));
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
};

export const incrementCounter = (list: number[], index: number): number[] => {
  // return list
  //   .slice(0, index)
  //   .concat([list[index] + 1])
  //   .concat(list.slice(index + 1));
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ]
};
