import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from'react-redux'
import App from './App.tsx'
import './index.css'
import { setupStore } from './app/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<Provider store={setupStore()}>
			<App />
		</Provider>
  </React.StrictMode>,
)
