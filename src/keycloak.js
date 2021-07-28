import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: 'mask',
  clientId: 'mask-dashboard',
});

export default keycloak;
