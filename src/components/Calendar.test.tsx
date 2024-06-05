// src/components/Calendar.test.tsx
import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

test('renders Calendar component', () => {
    render(<Calendar onDateChange={() => {}} />);
    const linkElement = screen.getByText(/Birthdays/i);
    expect(linkElement).toBeInTheDocument();
});
