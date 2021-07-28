import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from '../components/controls/Select';

test('<Select />', () => {
  const testProps = {
    name: 'name',
    label: 'Label',
    value: '',
    options: [
      { id: 1, title: 'One' },
      { id: 2, title: 'Two' },
    ],
    onChange: () => test(),
    color: 'secondary',
  };
  // Renders component
  const { debug } = render(<Select {...testProps} />);

  debug(); // Outputs DOM as a string

  // grab elements
  const [inputLabel, spanLabel] = screen.getAllByText('Label');
  const selectDiv = screen.getByRole('button');

  // Test labels
  expect(inputLabel.textContent).toBe(testProps.label);
  expect(inputLabel.tagName).toBe('LABEL');
  expect(inputLabel.getAttribute('data-shrink')).toBe('false');
  expect(spanLabel.textContent).toBe(testProps.label);
  expect(spanLabel.tagName).toBe('SPAN');

  // test select
  expect(selectDiv.id).toBe('name-label-placeholder');
});
