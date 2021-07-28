import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import ConfirmDeleteModal from './ConfirmDeleteModal';

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
describe('ConfirmDeleteModal Test', () => {
  it('it renders', () => {
    act(() => {
      render(
        <ConfirmDeleteModal
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
    expect(
      screen.getByRole('heading', { name: /Are you sure?/i })
    ).toBeInTheDocument();
  });

  it('cancel button works', () => {
    const fn = jest.fn();
    render(
      <ConfirmDeleteModal
        state={{
          status: 'idle',
          showConfirmDeleteModal: true,
          selectedTask: { title: 'selected task' },
        }}
        actions={{
          toggleConfirmDeleteModal: fn,
        }}
      />,
      container
    );
    fireEvent.click(screen.getByRole('button', { name: /Cancel/i }));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('yes button works', () => {
    const fn = jest.fn();
    render(
      <ConfirmDeleteModal
        state={{
          status: 'idle',
          targetIndex: 1,
          showConfirmDeleteModal: true,
          selectedTask: {
            title: 'selected task',
            categoryID: 1,
            id: 1,
          },
          categories: [
            {
              tasks: [
                {
                  id: 11,
                  title: 'dicta aperiam aut ipsam amet',
                  text:
                    'inventore quia laudantium officia labore qui est qui distinctio ut laboriosam dolorem quaerat nemo placeat minus corporis ut illo id incidunt sint dolor commodi qui ipsa est est ab asperiores blanditiis voluptates eum in placeat quia possimus rem eaque facere cum facere minus assumenda quam dolor libero quos amet sapiente',
                  categoryID: 1,
                  isFirstDutyStation: false,
                  isFirstTermAirman: true,
                  isOfficer: false,
                  verificationRequired: true,
                  location: '2128 Carrie Coves',
                  office: 'Accounts',
                  pocName: 'Lurline Kreiger',
                  pocPhoneNumber: '371-058-6598 x6370',
                  pocEmail: 'Emmalee78@hotmail.com',
                  createdAt: '2021-04-30T14:00:49.261Z',
                  updatedAt: '2021-04-30T14:00:49.261Z',
                },
              ],
              id: 1,
              title: 'Hansen Group',
              ownerID: 1,
              createdAt: '2021-04-30T14:00:48.885Z',
              updatedAt: '2021-04-30T14:00:48.885Z',
            },
          ],
        }}
        actions={{
          toggleConfirmDeleteModal: fn,
          toggleTaskDetail: fn,
          lazyDeleteTask: fn,
          toggleTaskSnackbar: fn,
        }}
      />,
      container
    );
    fireEvent.click(screen.getByRole('button', { name: /Yes/i }));
    expect(fn).toHaveBeenCalledTimes(4);
  });
});
