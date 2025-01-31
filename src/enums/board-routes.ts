const BASE_ROUTE = "/board"; // Alterar aqui caso a base da rota mude

export enum BoardRoutes {
  CREATE_BOARD = `${BASE_ROUTE}`,
  GET_BOARDS_BY_USER_ID = `${BASE_ROUTE}/get-boards-by-user-id/`,
  GET_BOARD_BY_USER_ID = `${BASE_ROUTE}/get-board-by-user-id/`,
  UPDATE_BOARD = `${BASE_ROUTE}/`,
  DELETE_BOARD = `${BASE_ROUTE}/`,
  ADD_MEMBER = `${BASE_ROUTE}/add-member`,
  DELETE_MEMBER = `${BASE_ROUTE}/delete-member`,
  UPDATE_MEMBER_ROLE = `${BASE_ROUTE}/update-member-role`,
  GET_ROLES = `${BASE_ROUTE}/roles`,
}
