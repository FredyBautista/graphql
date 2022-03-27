import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import Topic from './Topic';

const props = {
    topic: {
        name: 'vue',
        stargazerCount: 58484
    },
    onClick: jest.fn()
};

test("render Topic", () => {
    render(<Topic {...props} />);
    expect(screen.getByText(/^Total Stargazer:/)).toHaveTextContent(
        '58484',
      )
});