import { screen, fireEvent } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TableBody from './TableBody';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('table');
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

describe('Task Table View', () => {
  it('renders table', () => {
    act(() => {
      render(
        <TableBody
          tableData={[
            {
              id: 5,
              keycloakID: '05690a2b-0696-4b58-9a08-d818911c841e',
              enabled: true,
              firstName: 'Donavon',
              lastName: 'Eichmann',
              role: 'airman',
              sessionToken: 'spgwbx9vyq0smzuoifrd',
              unitID: 5,
              baseID: 1,
              isFirstTermAirman: false,
              isOfficer: true,
              isFirstDutyStation: false,
              createdAt: '2021-04-27T15:40:13.155Z',
              updatedAt: '2021-04-27T15:40:13.155Z',
              rank: 'Amn',
              notStarted: '-',
              inProgress: '-',
              pendingVerification: '-',
              completed: 100,
              startDate: '27 Apr 2021',
              monthStarted: 'April 2021',
            },
          ]}
          classes={{ id: 1 }}
          actions={{ id: 1 }}
          handleViewTask={() => test()}
        />,
        container
      );
    });
    expect(screen.getByRole('row', { name: /View/i })).toBeInTheDocument();
  });

  it('renders table', () => {
    const fn = jest.fn();
    render(
      <TableBody
        tableData={[
          {
            id: 5,
            keycloakID: '05690a2b-0696-4b58-9a08-d818911c841e',
            enabled: true,
            firstName: 'Donavon',
            lastName: 'Eichmann',
            role: 'airman',
            sessionToken: 'spgwbx9vyq0smzuoifrd',
            unitID: 5,
            baseID: 1,
            isFirstTermAirman: false,
            isOfficer: true,
            isFirstDutyStation: false,
            createdAt: '2021-04-27T15:40:13.155Z',
            updatedAt: '2021-04-27T15:40:13.155Z',
            rank: 'Amn',
            notStarted: '-',
            inProgress: '-',
            pendingVerification: '-',
            completed: 100,
            startDate: '27 Apr 2021',
            monthStarted: 'April 2021',
          },
        ]}
        classes={{ id: 1 }}
        actions={{ id: 1 }}
        handleViewTask={fn}
      />,
      container
    );
    fireEvent.click(screen.getByText(/View/i));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
