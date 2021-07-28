import React from 'react';
import { render } from '@testing-library/react';
import Toolbar from '../ManageTasksView/taskTable/Toolbar';

test('<Toolbar />', () => {
  // Renders component
  const { getByTestId } = render(<Toolbar handleOpen={() => true} />);

  // Assert that add-button is a button
  expect(getByTestId('add-task-button').tagName).toBe('BUTTON');
});
