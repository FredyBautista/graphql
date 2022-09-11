import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import App from './App';

test('renders learn react link', () => {
  render(<MockedProvider><App /></MockedProvider>);
  const header = screen.getAllByText(/Topics/i);
  expect(header[0]).toBeInTheDocument();
});
