import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ModalContent from './ModalContent';

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
describe('Modal Content Test', () => {
  it('Modal Content Idle', () => {
    act(() => {
      render(<ModalContent status="idle" />, container);
    });
    expect(container.textContent).toBe(
      'Your Task has been successfully saved. Click view to see more details.'
    );
  });

  it('Modal Content Pending', () => {
    act(() => {
      render(<ModalContent status="pending" />, container);
    });
    expect(container.textContent).toBe('Your Task is being uploaded now.');
  });
});
