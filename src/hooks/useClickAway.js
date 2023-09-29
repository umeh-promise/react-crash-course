import { useEffect, useRef } from 'react';

function useClickAway(callback, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref?.current && !ref?.current.contains(e.target)) callback?.();
      }

      document.addEventListener('click', handleClick, listenCapturing);

      return () =>
        document.removeEventListener('click', handleClick, listenCapturing);
    },
    [callback, listenCapturing]
  );

  return ref;
}

export default useClickAway;
