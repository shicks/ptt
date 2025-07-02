import { render } from 'preact';
import HomePage from './pages/HomePage';
import './style.css';

const appRoot = document.getElementById('app');

if (appRoot) {
  render(<HomePage />, appRoot);
} else {
  console.error("Failed to find the root element with id 'app'");
}
