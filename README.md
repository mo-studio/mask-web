# MASK Web App

MASK’S Web Application is a simple CRUD app for managing a list of tasks. This starter kit comes equipped with the ability to view all tasks in a list, view an individual task’s detail screen; and create new tasks, update existing tasks, and delete tasks. This project also comes out of the box with reusable and customizable components and their respective tests. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and leverages [Material-UI](https://github.com/mui-org/material-ui)’s customizable component library for reusable components. 


## Installation and Configuration

Clone this repository into your Gitlab Group's projects or subgroup. Then run the following command in the root directory of the project:

```
npm install
```

### Keycloak

This project is equipped with `Keycloak` authentication. In order to sign in with Keycloak and access the dashboard, you must have [MASK API](https://gitlab-dev.bespinmobile.cloud/corellian-engineering-corp-cec/mask/mask-api) running. The API creates a local Keycloak instance which is accessible in your browser at `keycloak:8080/auth`.

> Note that you will **not** be able to access the dashboard until you create a Keycloak user to access the protected API with.
> Ensure that you have created a Keycloak user by following the [Create a User](https://gitlab-dev.bespinmobile.cloud/corellian-engineering-corp-cec/mask/mask-api#creating-a-user) steps in the MASK-API documentation. 


### Running

Ensure that the MASK-API is running and that you have completed the [Create a User](https://gitlab-dev.bespinmobile.cloud/corellian-engineering-corp-cec/mask/mask-api#creating-a-user) steps.

Run the following command in the root directory of the project:

```
npm start
```

The end result should be a redirect to the URL `keycloak:8080/auth/realms/mask/...` when running MASK-Web at http://localhost:3001 and a successful authorization flow with the user credentials that you created.

Once logged in you should see the Manage Tasks view.

## Gotchas

If you receive the error message: `Unhandled Rejection (TypeError): Cannot read property 'tasks' of undefined`

- Ensure that you followed the [Create a User](https://gitlab-dev.bespinmobile.cloud/corellian-engineering-corp-cec/mask/mask-api#creating-a-user) steps exactly.

If you are still getting the same error message navigate to the `Keycloak Admin Console` at `keycloak:8080/auth` 

- Login with the credentials:
    - Username: admin
    - Password: admin
- Click `Clients` located in the side-nav menu on the left side on the screen. 
- Then click on the `Insallation` tab.
- Click the `Format Option` dropdown and select `Keycloak OIDC JSON` and ensure that the `Keycloak.json` file in the API matches exactly to the JSON output in the admin console.
(insert picture)

If you are still getting the same error message navigate to the `Keycloak Admin Console` at `keycloak:8080/auth` 

- Login with the credentials:
    - Username: `admin`
    - Password: `admin`
- Click `Export` on the bottom of the side nav menu on the left side of the screen. 
- Toggle `Export groups and roles` and `Export Clients` to `ON`.
- Click `Export`.
> This should download a `realm-export.json` file to your machine. 
- Replace the existing `realm-export.json` file in the root directory of the API with the newly downloaded JSON file.
- In the terminal: Quit the MASK-API by running `CMD + c` (`CTRL + c` for windows)
- Run `docker system prune -a`
    - Type `Y` to confirm
- Run `docker compose up`
- Once the API is up and running follow the [Create a User](https://gitlab-dev.bespinmobile.cloud/corellian-engineering-corp-cec/mask/mask-api#creating-a-user) steps once more.
- Ensure that the Mask-web project is running.
- Log in with the newly created credentials and you should be redirected to the URL `http://localhost:3001/app/tasks`.

## Folder Structure

```
MASK-WEB/
  node_modules/
  public/
    favicon.ico
    index.html
    manifest.json
  src/
    components/
      controls/
      hooks/
      GlobalStyles.js
      Loading.js
      Page.js
      SlideOut.js
      Snackbar.js
    layouts/
      appLayout/
      MainLayout/
    services/
    tests/
    theme/
    views/
      errors/
      tasks/
        ManageTasksView/
    App.js
    index.js
  docker-compose.yml
  Dockerfile
  keycloak.json
  package.json
```
You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`

### Files of Interest

`src/index.js` - Javascript file corresponding to `index.html`

`App.js` - App component file. App component is the main component that acts as a container for all other components

`routes.js` - defines the routing for the entire application

`services/taskService.js` - file containing the API calls and helper functions for the `Task` model

`src/keycloak.js` - Javascript file that initializes the `URL`, `Realm` and `ClientId` for `Keycloak`

`src/views/tasks/ManageTasksView/index.js` - Main container for the Tasks view

`src/views/tasks/ManageTasksView/reducer.js` - Contains everything needed for state management

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Runs all tests in the project with the `--coverage --watchAll` flags. <br>
You can control which tests to run in the terminal.








