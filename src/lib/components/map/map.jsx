import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../loading-spinner/loading-spinner';
// import basicStyles from './styles';
import generateMarker from './generateMarker';

const Map = ({
  center,
  className,
  height,
  id,
  loading,
  markers,
  maxZoom,
  minZoom,
  styles,
  width,
  zoom
}) => {
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);
  let openInfoWindow = null;

  useEffect(() => {
    if (!loading && window.google && window.google.maps) {
      const newMap = new window.google.maps.Map(document.getElementById(id), {
        center,
        zoom,
        maxZoom,
        minZoom,
        disableDefaultUI: true,
        styles
      });
      if (markers) {
        markers.forEach(marker => {
          const newMarker = new window.google.maps.Marker({
            ...marker,
            icon: generateMarker(marker.color)
          });
          const infoWindow = new window.google.maps.InfoWindow({
            content: ''
          });

          newMarker.addListener('click', () => {
            const content = marker.infoWindow;
            infoWindow.setContent(content);
            window.google.maps.event.addListener(infoWindow, 'domready', () => {
              document.getElementById('card-button').addEventListener('click', () => {
                marker.onLinkClick();
              });
            });
            if (openInfoWindow) {
              openInfoWindow.close();
            }
            infoWindow.open(newMap, newMarker);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            openInfoWindow = infoWindow;
          });
          newMarker.setMap(newMap);
        });
      }
      setMap(newMap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, markers]);

  return (
    <div id={id} className={`${className}`} style={{ height, width, position: 'relative' }}>
      <LoadingSpinner loading={loading} background="dark" noSpinner />
    </div>
  );
};

Map.defaultProps = {
  className: '',
  height: 200,
  id: 'map',
  loading: false,
  markers: null,
  maxZoom: null,
  minZoom: null,
  styles: null,
  width: '100%',
  zoom: 12
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }).isRequired,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  loading: PropTypes.bool,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
      }),
      title: PropTypes.string,
      color: PropTypes.string,
      infoWindow: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    })
  ),
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  styles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zoom: PropTypes.number
};

export default Map;
