import React from 'react';
import Restaurants from './Restaurants';
import testRender from '../../testing/testRender';

test('renders Filters header', () => {
    const { getByText } = testRender(<Restaurants />);
    const headerElement = getByText(/Filters/i);
    expect(headerElement).toBeInTheDocument();
});
