import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../loading-spinner/loading-spinner';
// import basicStyles from './styles';
import generateMarker from './generateMarker';

const Map = ({
  center,
  className,
  dynamicCenter,
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
  const [currentMarkers, setCurrentMarkers] = useState([]);
  let openInfoWindow = null;

  // Map
  useEffect(() => {
    console.log('Loading changed!');
    if (!map) {
      if (!loading && window.google && window.google.maps) {
        const newMap = createMap();
        if (markers) {
          setMarkers(newMap, markers);
        }
        setMap(newMap);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // Markers
  useEffect(() => {
    console.log('Markers changed!', markers);

    if (map && markers) {
      setMarkers(map, markers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers]);

  const createMap = () => {
    console.log('Creating Map!');
    return new window.google.maps.Map(document.getElementById(id), {
      center,
      zoom,
      maxZoom,
      minZoom,
      disableDefaultUI: true,
      styles
    });
  };

  const clearMarkers = () => {
    if (currentMarkers.length) {
      currentMarkers.forEach(marker => {
        marker.setMap(null);
      });
      setCurrentMarkers([]);
    }
  };

  const setMarkers = (_map, _markers) => {
    console.log('Setting Markers!');
    clearMarkers();
    setCurrentMarkers(
      _markers.map(marker => {
        const newMarker = new window.google.maps.Marker({
          ...marker,
          icon: generateMarker(marker.color)
        });
        const infoWindow = new window.google.maps.InfoWindow({
          content: ''
        });

        if (marker.infoWindow) {
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
            infoWindow.open(_map, newMarker);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            openInfoWindow = infoWindow;
          });
        }

        newMarker.setMap(_map);
        return newMarker;
      })
    );

    if (dynamicCenter) {
      adjustCenter();
    }
  };

  const adjustCenter = () => {
    const _map = map;
    _map.panTo(markers[0].position);
    setMap(_map);
  };

  return (
    <div id={id} className={`${className}`} style={{ height, width, position: 'relative' }}>
      <LoadingSpinner loading={loading} background="dark" noSpinner />
    </div>
  );
};

Map.defaultProps = {
  className: '',
  dynamicCenter: false,
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
  dynamicCenter: PropTypes.bool,
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
