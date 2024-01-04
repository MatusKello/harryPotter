import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from './configs/theme';
import i18n from './i18n';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback='loading'>
          <App />
        </Suspense>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
