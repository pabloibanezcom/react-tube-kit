export const getContrastColor = hexcolor => {
  hexcolor = hexcolor.replace('#', '');
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
};

export const getAlternateColor = color => {
  switch (color) {
    case 'primary':
      return 'primary-alt';
    case 'secondary':
      return 'secondary-alt';
    case 'success':
      return 'white';
    case 'danger':
      return 'white';
    case 'warning':
      return 'black';
    case 'light':
      return 'black';
    case 'dark':
      return 'white';
    default:
      return 'white';
  }
};
