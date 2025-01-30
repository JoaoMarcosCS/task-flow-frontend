const BASE_ROUTE = "/board"; // Alterar aqui caso a base da rota mude

export enum BoardRoutes {
  CREATE_BOARD = `${BASE_ROUTE}`,
  GET_BOARDS_BY_USER_ID = `${BASE_ROUTE}/get-boards-by-user-id/:userId`,
  GET_BOARD_BY_USER_ID = `${BASE_ROUTE}/get-board-by-user-id/:userId/:boardId`,
  UPDATE_BOARD = `${BASE_ROUTE}/:boardId`,
  DELETE_BOARD = `${BASE_ROUTE}/:boardId`,
  ADD_MEMBER = `${BASE_ROUTE}/:boardId/add-member`,
  DELETE_MEMBER = `${BASE_ROUTE}/:boardId/delete-member`,
  UPDATE_MEMBER_ROLE = `${BASE_ROUTE}/:boardId/update-member-role`,
  GET_ROLES = `${BASE_ROUTE}/roles`,
}
