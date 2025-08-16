import React from 'react'
import ReactDOM from 'react-dom/client'
import LiveFeedProvider from './live/LiveFeedProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LiveFeedProvider>
    <App />
      </LiveFeedProvider>
  </React.StrictMode>,
)
