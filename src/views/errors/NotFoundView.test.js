import { render, screen } from '@testing-library/react';
import NotFoundView from './NotFoundView';

describe('NotFoundView View', () => {
  test('it renders', () => {
    render(<NotFoundView />);
    expect(
      screen.getByRole('heading', {
        name: /404: The page you are looking for isn’t here/i,
      })
    ).toBeInTheDocument();
  });
});
