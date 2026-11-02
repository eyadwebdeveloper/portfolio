import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
// Self-hosted font (all axes: weight, width, optical size). Replaces the Google Fonts request.
import '@fontsource-variable/bricolage-grotesque/full.css';
import App from './App';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build ships prerendered HTML, so hydrate it; in dev the root is empty.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}