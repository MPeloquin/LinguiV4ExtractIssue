import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { messages } from './locale/en/messages.ts';

i18n.load('en', messages);
i18n.activate('en');

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <I18nProvider i18n={i18n}>
            <App />
        </I18nProvider>
    </React.StrictMode>,
);
