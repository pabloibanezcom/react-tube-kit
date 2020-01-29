import { getColor } from '../../util/color';

const generateMarker = typeOrColor => {
  return {
    path: 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
    fillColor: getColor(typeOrColor || 'primary'),
    fillOpacity: 1,
    strokeColor: '#000',
    strokeWeight: 1,
    scale: 0.25
  };
};

export default generateMarker;
