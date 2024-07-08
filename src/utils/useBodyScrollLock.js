// useBodyScrollLock.js
import { useLayoutEffect } from 'react';

function useBodyScrollLock(isLocked) {
  useLayoutEffect(() => {
    if (isLocked) {
      // Disable scrolling on the body
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling on the body
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);
}

export default useBodyScrollLock;
