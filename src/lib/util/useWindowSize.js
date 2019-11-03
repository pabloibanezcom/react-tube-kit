import { useEffect, useState } from 'react';

function getWindowSize() {
  const { outerWidth: width } = window;
  if (width >= 1200) {
    return 'xl';
  }
  if (width >= 992) {
    return 'lg';
  }
  if (width >= 768) {
    return 'md';
  }
  if (width >= 576) {
    return 'sm';
  }
  if (width < 576) {
    return 'xs';
  }
  return null;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
