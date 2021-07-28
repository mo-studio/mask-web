import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useForm as UseForm, Form } from './useForm';

let container = null;
let container1 = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
  container1 = document.createElement('array');
  document.body.appendChild(container1);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Use Form', () => {
  act(() => {
    test('Form', () => {
      render(<Form />, container);
      expect(container.textContent).toBe('');
    });
  });
});
