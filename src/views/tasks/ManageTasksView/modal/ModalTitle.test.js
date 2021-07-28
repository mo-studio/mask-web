import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ModalTitle from './ModalTitle';

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
describe('Modal Title', () => {
  it('Modal Content Idle', () => {
    act(() => {
      render(<ModalTitle status="idle" idleState="idle state" />, container);
    });
    expect(container.textContent).toBe('idle state');
  });

  it('Modal Content Pending', () => {
    act(() => {
      render(
        <ModalTitle
          status="pending"
          idleState="idle"
          loadingState="loading state"
        />,
        container
      );
    });
    expect(container.textContent).toBe('loading state');
  });
});
