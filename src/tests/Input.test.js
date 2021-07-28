import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Input from '../components/controls/Input';

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
it('renders label', () => {
  act(() => {
    render(
      <Input
        label="label"
        name="name"
        value
        onChange={() => test()}
        items={[1, 2, 3, 4, 5]}
      />,
      container
    );
  });
  expect(container.textContent).toBe('labellabel');
});
