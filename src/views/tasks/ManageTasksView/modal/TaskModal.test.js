import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import TaskModal from './TaskModal';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
function test() {
  return true;
}
describe('Task Modal Display', () => {
  it('it renders', () => {
    act(() => {
      render(
        <TaskModal
          state={{ status: 'idle', showTaskModal: true }}
          actions={{
            toggleTaskModal: () => test(),
            toggleTaskDetail: () => test(),
          }}
        />,
        container
      );
    });
    expect(
      screen.getByRole('heading', { name: /Your Task was saved!/i })
    ).toBeInTheDocument();
  });
});
