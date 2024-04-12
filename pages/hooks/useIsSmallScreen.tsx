import { useEffect, useState } from 'react';

const useIsSmallScreen = (): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  console.log("🚀 ~ useIsSmallScreen ~ isSmallScreen:", isSmallScreen)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);  // Set to true if screen width is less than 768px
    };

    checkScreenSize();  // Check on mount
    window.addEventListener('resize', checkScreenSize);  // Check on resize

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isSmallScreen;
};
export default useIsSmallScreen;