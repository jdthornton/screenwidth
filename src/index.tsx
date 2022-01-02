import { createContext, useContext, useCallback, useState, useEffect, ReactNode, ElementType } from 'react';
import useEventListener from '@jdthornton/useeventlistener';

const ScreenWidthStateContext = createContext<number | undefined>(undefined);

export function useScreenWidthState(): number {
  const context = useContext(ScreenWidthStateContext);
  if (context === undefined) {
    throw new Error('useScreenWidthState must be used within a ScreenWidthProvider');
  }
  return context;
}

export function withIsMobile(
  WrappedComponent: ElementType,
  width: number = 1024
){
  return (props: any) => {
    const screenWidth = useScreenWidthState();
    return (
      <WrappedComponent {...props} isMobile={screenWidth < width} />
    )
  }
}

type ScreenWidthProviderProps = {
  children?: ReactNode;
}
const getWidth = () => typeof window !== "undefined" ? window.innerWidth : 1025
export default function ScreenWidthProvider ({
  children
}: ScreenWidthProviderProps) {
  const [width,setWidth] = useState<number>(getWidth())
  const handleSizeChange = useCallback(() => {
    setWidth(getWidth())
  }, [])
  useEventListener("resize", handleSizeChange);
  useEffect(() => {
    setWidth(getWidth())
  },[])
  return (
    <ScreenWidthStateContext.Provider value={width}>
      {children}
    </ScreenWidthStateContext.Provider>
  );
};
