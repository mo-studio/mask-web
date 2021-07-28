import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ManageTasksView from './views/tasks/ManageTasksView';
import NotFoundView from './views/errors/NotFoundView';
import AppLayout from './layouts/appLayout';

const routes = [
  {
    path: 'app',
    element: <AppLayout />,
    children: [
      { path: 'tasks', element: <ManageTasksView /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/tasks" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
