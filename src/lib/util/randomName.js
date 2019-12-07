const randomName = name => {
  return `${name}_${Math.random()
    .toString(36)
    .substring(7)}`;
};

export default randomName;
