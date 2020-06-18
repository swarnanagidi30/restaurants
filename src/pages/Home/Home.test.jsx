import React from 'react';
import Home from './Home';
import testRender from '../../testing/testRender';

test('renders Search Restaurants by City header', () => {
    const { getByText } = testRender(<Home />);
    const headerElement = getByText(/Search Restaurants by City/i);
    expect(headerElement).toBeInTheDocument();
});
