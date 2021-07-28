import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Switch from '../components/controls/Switch';

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
it('renders switch', () => {
  act(() => {
    render(
      <Switch
        name="name"
        value
        onChange={() => test()}
        size="small"
        color="default"
      />,
      container
    );
  });
  expect(container.textContent).toBe('NoYes');
});
