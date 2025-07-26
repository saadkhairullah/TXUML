'use client';
import { useMapTheme } from '../../context/MapThemeContext';
import './MapThemePicker.css'; // Import the CSS file for styling
export default function MapThemePicker() {
  const { theme, setTheme } = useMapTheme();

type MapTheme = 'light' | 'dark' | 'satellite';

  const themes = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Satellite', value: 'satellite' },
  ];

  return (
    <div className="theme-picker">
      <h4 className="theme-picker-title">Map Theme</h4>
      <div className="theme-options">
        {themes.map((t) => (
          <button
            key={t.value}
            className={`theme-option ${theme === t.value ? 'selected' : ''}`}
            onClick={() => setTheme(t.value as MapTheme)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}