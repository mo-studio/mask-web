import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ModalActions from './ModalActions';

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
it('Modal Actions', () => {
  act(() => {
    render(
      <ModalActions
        status="idle"
        leftButtonProps={{ text: 'left', onClick: () => test() }}
        rightButtonProps={{ text: 'right', onClick: () => test() }}
      />,
      container
    );
  });
  expect(container.textContent).toBe('leftright');
});
