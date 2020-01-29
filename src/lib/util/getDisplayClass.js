const getDisplayClass = (displayStr, displayMode) => {
  const displaySizes = displayStr.split('-');
  const classes = [];
  if (displaySizes[0] === '') {
    classes.push(`d-${displayMode || 'block'}`);
  } else {
    classes.push(`d-${displaySizes[0]}-${displayMode || 'block'}`);
  }
  if (displaySizes[1] === '') {
    classes.push('d-none');
  } else {
    classes.push(`d-${displaySizes[1]}-${displayMode || 'none'}`);
  }

  return classes.map(c => c.replace('-xs', '')).join(' ');
};

export default getDisplayClass;
