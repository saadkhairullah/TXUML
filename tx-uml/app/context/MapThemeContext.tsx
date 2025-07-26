'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type MapTheme = 'light' | 'dark' | 'satellite';

interface MapThemeContextType {
  theme: MapTheme;
  setTheme: (theme: MapTheme) => void;
  mapStyle: string;
}

const MapThemeContext = createContext<MapThemeContextType | undefined>(undefined);

export const MapThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<MapTheme>('light');



const mapStyle =
  theme === 'light'
    ? 'mapbox://styles/mapbox/streets-v12'
    : theme === 'dark'
    ? 'mapbox://styles/mapbox/dark-v11'
    : 'mapbox://styles/mapbox/satellite-streets-v12';

  return (
    <MapThemeContext.Provider value={{ theme, setTheme, mapStyle }}>
      {children}
    </MapThemeContext.Provider>
  );
};

export const useMapTheme = () => {
  const ctx = useContext(MapThemeContext);
  if (!ctx) throw new Error('useMapTheme must be used within MapThemeProvider');
  return ctx;
};