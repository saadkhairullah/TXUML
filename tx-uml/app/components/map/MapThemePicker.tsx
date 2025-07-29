'use client';
import { useMapTheme } from '../../context/MapThemeContext';
import './MapThemePicker.css';

export default function MapThemePicker() {
  const { theme, setTheme } = useMapTheme();

  let style: React.CSSProperties = {};
  let titleStyle: React.CSSProperties = {};
  if (theme === 'dark') {
    style = { background: '#222', color: '#fafafa' };
    titleStyle = { color: '#fafafa' };
  } else if (theme === 'satellite') {
    style = { background: '#001f3f', color: '#fff' };
    titleStyle = { color: '#fff' };
  } else {
    style = { background: '#fff', color: '#222' };
    titleStyle = { color: '#222' };
  }

  const themes = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Satellite', value: 'satellite' },
  ];

  return (
    <div className="theme-picker" style={style}>
      <h4 className="theme-picker-title" style={titleStyle}>Map Theme</h4>
      <div className="theme-options">
        {themes.map((t) => (
          <button
            key={t.value}
            className={`theme-option ${theme === t.value ? 'selected' : ''}`}
            onClick={() => setTheme(t.value as typeof theme)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}