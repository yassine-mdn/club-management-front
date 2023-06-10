import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FluentProvider, webLightTheme} from "@fluentui/react-components";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <FluentProvider theme={webLightTheme}>
          <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                  <App />
                  <ReactQueryDevtools/>
              </BrowserRouter>
          </QueryClientProvider>
      </FluentProvider>
  </React.StrictMode>,
)
