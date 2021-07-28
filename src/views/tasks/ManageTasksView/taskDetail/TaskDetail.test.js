import { screen, fireEvent } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TaskDetail from './TaskDetail';

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

describe('TaskDetail View', () => {
  it('renders TaskDetail', () => {
    act(() => {
      render(
        <TaskDetail
          state={{
            selectedTask: {
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
          }}
          actions={{ id: 1 }}
        />,
        container
      );
    });
    expect(
      screen.getByRole('heading', { name: /Lurline Kreiger/i })
    ).toBeInTheDocument();
  });

  it('edit button works', () => {
    const fn = jest.fn();
    render(
      <TaskDetail
        state={{
          selectedTask: {
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
        }}
        actions={{
          setEditModeOn: fn,
          toggleTaskDetail: () => test(),
          toggleTaskForm: () => test(),
        }}
      />,
      container
    );
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('delete button works', () => {
    const fn = jest.fn();
    render(
      <TaskDetail
        state={{
          selectedTask: {
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
        }}
        actions={{
          toggleConfirmDeleteModal: fn,
        }}
      />,
      container
    );
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
