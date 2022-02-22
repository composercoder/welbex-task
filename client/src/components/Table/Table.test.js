import { render, screen } from '@testing-library/react'
import Table from './Table';

it('renders app component correctly', () => {
  render(<Table />);

  expect(screen.getByText(/Забеги Украины/i)).toBeInTheDocument();
});
