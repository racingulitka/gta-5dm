import * as React from 'react';

const useIsMobile = (mobileScreenSize = 768) => {
  const isClient = typeof window !== 'undefined'; // Проверка, выполняется ли код в браузерной среде

  if (isClient && typeof window.matchMedia !== 'function') {
    throw Error('matchMedia not supported by the browser!');
  }

  const [isMobile, setIsMobile] = React.useState(
    isClient ? window.matchMedia(`(max-width: ${mobileScreenSize}px)`).matches : false
  );

  const checkIsMobile = React.useCallback((event:any) => {
    setIsMobile(event.matches);
  }, []);

  React.useEffect(() => {
    if (!isClient) {
      return; // Не выполнять следующий код на сервере
    }

    const mediaListener = window.matchMedia(`(max-width: ${mobileScreenSize}px)`);

    try {
      mediaListener.addEventListener('change', checkIsMobile);
    } catch (error) {
      try {
        mediaListener.addListener(checkIsMobile);
      } catch (addListenerError) {
        console.error('Error adding media query listener:', addListenerError);
      }
    }

    return () => {
      try {
        mediaListener.removeEventListener('change', checkIsMobile);
      } catch (error) {
        try {
          mediaListener.removeListener(checkIsMobile);
        } catch (removeListenerError) {
          console.error('Error removing media query listener:', removeListenerError);
        }
      }
    };
  }, [isClient, mobileScreenSize, checkIsMobile]);

  return isMobile;
};

export default useIsMobile;