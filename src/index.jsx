import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

const element = document.querySelector('#root');
createRoot(element)
  .render(
    <App />
  );

