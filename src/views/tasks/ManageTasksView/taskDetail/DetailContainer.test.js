import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import DetailContainer from './DetailContainer';

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
describe('Detail Container Test', () => {
  it('detail container', () => {
    act(() => {
      render(
        <DetailContainer
          state={{
            status: 'idle',
            showConfirmDeleteModal: true,
            selectedTask: { title: 'selected task' },
          }}
          actions={{
            toggleTaskModal: () => test(),
            toggleTaskDetail: () => test(),
          }}
        />,
        container
      );
    });
    expect(container.textContent).toBe(
      'Task DetailTask Titleselected taskDescriptionPoint of ContactFirst Duty StationNoFirst Term Airman OnlyNoOfficer OnlyNoVerification RequiredNoExit'
    );
  });
});
