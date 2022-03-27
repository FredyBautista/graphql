import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getAllByText(/Topics/i);
  expect(header[0]).toBeInTheDocument();
});
