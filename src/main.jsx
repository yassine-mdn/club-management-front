import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FluentProvider, webLightTheme} from "@fluentui/react-components";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <FluentProvider theme={webLightTheme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </FluentProvider>
  </React.StrictMode>,
)
