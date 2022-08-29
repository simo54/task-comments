import React from 'react';
import { render, screen } from '@testing-library/react';
import MainButton from './MainButton';

test('renders <MainButton>', () => {
	render(<MainButton />);
	const element = screen.getByRole('button');
	expect(element).toBeInTheDocument();
});
