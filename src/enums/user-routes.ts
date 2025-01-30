const BASE_ROUTE = '/user'; // Alterar aqui caso a base da rota mude

export enum UserRoutes {
  CREATE_USER = `${BASE_ROUTE}`,
  UPDATE_USER = `${BASE_ROUTE}`,
  GET_USER_BY_ID = `${BASE_ROUTE}/get-by-id/:id`,
  GET_USER_BY_EMAIL = `${BASE_ROUTE}/get-by-email/:email`,
  DELETE_USER = `${BASE_ROUTE}/:id`,
}
