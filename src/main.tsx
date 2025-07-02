
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx: Starting application initialization...');

try {
  const rootElement = document.getElementById("root");
  console.log('Main.tsx: Root element found:', rootElement);
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  console.log('Main.tsx: Creating React root...');
  const root = createRoot(rootElement);
  
  console.log('Main.tsx: Rendering App component...');
  root.render(<App />);
  
  console.log('Main.tsx: Application initialized successfully');
} catch (error) {
  console.error('Main.tsx: Failed to initialize application:', error);
}
