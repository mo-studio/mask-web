import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('it renders', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /MASK/i })).toBeInTheDocument();
  });
});
