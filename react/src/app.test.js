/*eslint-disable*/

import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByText('Learn React');
  expect(linkElement).toBeInTheDocument();
});
