import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Indigo Card/i);
  expect(linkElement).toBeInTheDocument();
});
