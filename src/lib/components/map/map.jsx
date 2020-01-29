/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import LoadingSpinner from '../loading-spinner/loading-spinner';
// import basicStyles from './styles';
import generateMarker from './generateMarker';
import componentData from './map.data.json';

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

  const loadGoogleMaps = onLoad => {
    const script = document.createElement(`script`);
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    document.head.append(script);
    script.addEventListener(`load`, onLoad);
    return () => script.removeEventListener(`load`, onLoad);
  };

  // Map
  useEffect(() => {
    if (!map) {
      if (!(window.google && window.google.maps)) {
        loadGoogleMaps(initMap);
      } else {
        initMap();
      }
    }
  }, [loading]);

  // Markers
  useEffect(() => {
    if (map && markers) {
      setMarkers(map, markers);
    }
  }, [markers]);

  const initMap = () => {
    const newMap = createMap();
    if (markers) {
      setMarkers(newMap, markers);
    }
    setMap(newMap);
  };

  const createMap = () => {
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

Object.assign(Map, generateComponentProps(componentData));

export default Map;
