const isSize = (currentSize, sizeStr) => {
  if (!sizeStr) {
    return false;
  }
  const sizesArray = sizeStr.split('-').map(str => getNumberFromSizeStr(str));
  const currentSizeNumber = getNumberFromSizeStr(currentSize);
  if (sizesArray[0] === '') {
    return currentSizeNumber <= sizesArray[1];
  }
  if (sizesArray[1] === '') {
    return currentSizeNumber >= sizesArray[0];
  }
  return currentSizeNumber >= sizesArray[0] && currentSizeNumber <= sizesArray[1];
};

const getNumberFromSizeStr = sizeStr => {
  switch (sizeStr) {
    case 'xs':
      return 1;
    case 'sm':
      return 2;
    case 'md':
      return 3;
    case 'lg':
      return 4;
    case 'xl':
      return 5;
    default:
      return sizeStr;
  }
};

export default isSize;
