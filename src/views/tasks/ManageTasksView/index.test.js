import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import ManageTasksView from './index';

afterEach(cleanup);

jest.mock('axios');

const firstCall = [
  {
    id: 1,
    name: "Ziemann, O'Kon and Schmitt",
    baseID: 1,
    createdAt: '2021-04-30T14:00:49.613Z',
    updatedAt: '2021-04-30T14:00:49.613Z',
  },
  {
    id: 2,
    name: 'Bayer - Pfannerstill',
    baseID: 1,
    createdAt: '2021-04-30T14:00:49.624Z',
    updatedAt: '2021-04-30T14:00:49.624Z',
  },
];

const secondCall = {
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
};

const thirdCall = {
  categories: [
    {
      tasks: [
        {
          id: 3,
          title: 'itaque nihil nobis rerum accusantium',
          text:
            'aut non ea et eius dicta dolor minima error maiores mollitia rerum quis qui doloribus blanditiis rerum distinctio commodi aliquid quod vel soluta qui quam beatae voluptas magni et nulla cum reprehenderit dolor tempora vel repellendus voluptas adipisci alias esse qui delectus deserunt quasi blanditiis suscipit voluptates ut sequi iste',
          categoryID: 7,
          isFirstDutyStation: true,
          isFirstTermAirman: false,
          isOfficer: true,
          verificationRequired: false,
          location: '579 Faustino Streets',
          office: 'Integration',
          pocName: 'Antone Brekke',
          pocPhoneNumber: '100.754.4864',
          pocEmail: 'Cristopher.Ebert@gmail.com',
          createdAt: '2021-04-30T14:00:49.115Z',
          updatedAt: '2021-04-30T14:00:49.115Z',
        },
        {
          id: 4,
          title: 'repellendus dolorem iure tempore quidem',
          text:
            'doloribus enim voluptatem sit repudiandae quo quia consequatur voluptas voluptatibus eum corrupti doloremque sed dolorem molestiae doloribus amet quam animi a impedit beatae non temporibus est alias dolorum inventore expedita blanditiis fugiat sint quia aperiam aliquid quia sequi beatae non ut quae impedit laudantium deleniti ab est ullam amet et',
          categoryID: 7,
          isFirstDutyStation: true,
          isFirstTermAirman: true,
          isOfficer: true,
          verificationRequired: false,
          location: '93035 Feest Parkway',
          office: 'Brand',
          pocName: 'Josiane Schinner',
          pocPhoneNumber: '922-636-2586 x42668',
          pocEmail: 'Eugene37@yahoo.com',
          createdAt: '2021-04-30T14:00:49.131Z',
          updatedAt: '2021-04-30T14:00:49.131Z',
        },
        {
          id: 7,
          title: 'et id vitae omnis doloribus',
          text:
            'quasi aliquam eligendi accusamus molestiae amet enim dolorum voluptas est est maiores ex omnis sapiente tempore qui expedita provident odio nobis rerum voluptatem inventore hic quia dolorem debitis et saepe hic velit quia deleniti culpa sunt exercitationem optio doloremque a sit laborum aut laboriosam illum sit non omnis eligendi possimus',
          categoryID: 7,
          isFirstDutyStation: false,
          isFirstTermAirman: false,
          isOfficer: false,
          verificationRequired: true,
          location: '20191 Kuvalis Key',
          office: 'Applications',
          pocName: 'Gilberto Collier',
          pocPhoneNumber: '234-076-0664 x2239',
          pocEmail: 'Zachery.Moore5@gmail.com',
          createdAt: '2021-04-30T14:00:49.188Z',
          updatedAt: '2021-04-30T14:00:49.188Z',
        },
        {
          id: 10,
          title: 'aut est et consequatur omnis',
          text:
            'esse eaque incidunt delectus eveniet eius aspernatur voluptates asperiores in rerum officiis tempore nemo enim consequuntur aut molestiae autem officia dolor at magni qui dolor totam delectus aliquam mollitia fugiat qui eos ut omnis quo harum nisi rerum nihil et dolor accusamus ullam sunt explicabo porro velit aperiam architecto sed',
          categoryID: 7,
          isFirstDutyStation: false,
          isFirstTermAirman: false,
          isOfficer: true,
          verificationRequired: true,
          location: '103 Friesen Crossroad',
          office: 'Accounts',
          pocName: 'Ally Pacocha',
          pocPhoneNumber: '1-563-751-4180 x2292',
          pocEmail: 'Elsie.Torphy@yahoo.com',
          createdAt: '2021-04-30T14:00:49.244Z',
          updatedAt: '2021-04-30T14:00:49.244Z',
        },
        {
          id: 22,
          title: 'quae aut neque sequi rem',
          text:
            'natus atque et animi sit qui sed voluptatem laudantium ipsa culpa non suscipit error consequuntur voluptatem blanditiis omnis aut quis ut aperiam ea doloribus eos dolore quis qui nobis aut saepe neque perspiciatis eos vitae minima autem eveniet voluptas accusantium est tempore cum aliquid ut velit voluptatem repellat enim omnis',
          categoryID: 7,
          isFirstDutyStation: false,
          isFirstTermAirman: true,
          isOfficer: false,
          verificationRequired: false,
          location: '5875 Willis Inlet',
          office: 'Brand',
          pocName: 'Darius Crooks',
          pocPhoneNumber: '219-034-1028 x95980',
          pocEmail: 'Gertrude.Cormier@gmail.com',
          createdAt: '2021-04-30T14:00:49.449Z',
          updatedAt: '2021-04-30T14:00:49.449Z',
        },
        {
          id: 25,
          title: 'asperiores quam aliquam quae dolores',
          text:
            'aliquam aut sint autem necessitatibus voluptas nobis id ipsum debitis impedit ipsum ut rem voluptates quae aut molestiae iure quaerat sit sed facere dolorem est natus officiis quis sit minima at minima corrupti natus repellendus et dolor sapiente doloremque quibusdam suscipit explicabo voluptatem consequatur iusto doloremque quo quidem delectus sit',
          categoryID: 7,
          isFirstDutyStation: false,
          isFirstTermAirman: false,
          isOfficer: true,
          verificationRequired: true,
          location: '728 Lenore Crest',
          office: 'Brand',
          pocName: 'Marcia Emmerich',
          pocPhoneNumber: '514-242-0184',
          pocEmail: 'Alysson_Herman@yahoo.com',
          createdAt: '2021-04-30T14:00:49.530Z',
          updatedAt: '2021-04-30T14:00:49.530Z',
        },
      ],
      id: 7,
      title: 'Wilkinson, Bernier and Franecki',
      ownerID: 2,
      createdAt: '2021-04-30T14:00:48.986Z',
      updatedAt: '2021-04-30T14:00:48.986Z',
    },
  ],
};
describe('ManageTasks View', () => {
  test('api call works', async () => {
    await act(async () => {
      axios.get.mockResolvedValueOnce({ data: firstCall });
      axios.get.mockResolvedValueOnce({ data: secondCall });
      axios.get.mockResolvedValueOnce({ data: thirdCall });
      render(<ManageTasksView />);
    });

    expect(screen.getByText('Lurline Kreiger')).toBeInTheDocument();
  });
});
