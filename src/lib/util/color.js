export const getContrastColor = hexcolor => {
  hexcolor = hexcolor.replace('#', '');
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
};

export const getAlternateColor = (color, isOutline) => {
  switch (color) {
    case 'primary':
      return 'primary-alt';
    case 'secondary':
      return !isOutline ? 'secondary-alt' : 'secondary';
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

export const getColor = type => {
  switch (type) {
    case 'primary':
      return '#e6c300';
    case 'secondary':
      return '#002c41';
    case 'success':
      return '#28a745';
    case 'danger':
      return '#d2372c';
    case 'warning':
      return '#eb8c00';
    case 'white':
      return '#ffffff';
    case 'black':
      return '#000000';
    case 'grey-dark':
      return '#9e9e9e';
    case 'light':
      return '#f8f9fa';
    case 'dark':
      return '#343a40';
    default:
      return type;
  }
};
