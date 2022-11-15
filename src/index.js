import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { LightTheme, BaseProvider } from 'baseui';
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById('root'));
const engine = new Styletron();
root.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>
);
