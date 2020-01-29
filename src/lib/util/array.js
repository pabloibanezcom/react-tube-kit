export const chunkArray = (arr, size) => {
  const result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, size + index));
    index += size;
  }
  return result;
};
