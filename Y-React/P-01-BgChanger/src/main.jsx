/*What it does: Brings in StrictMode, a development-only tool from React.
Why it's used: It helps you identify potential problems in your React app by:
Warning about deprecated lifecycle methods
Highlighting unexpected side effects
Double-invoking some functions (like useEffect) to detect bugs
✅ Safe to remove in production, but highly recommended during development.
*/
import { StrictMode } from 'react'
/*What it does: Imports the createRoot method, introduced in React 18.
Why it's used: It enables React’s Concurrent Features and better performance options.
Replaces older ReactDOM.render() from React 17 and earlier.
 */
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
