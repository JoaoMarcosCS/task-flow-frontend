const BASE_ROUTE = "/task";

export enum TaskRoutes {
  CREATE_TASK = `${BASE_ROUTE}`,
  GET_TASKS_BY_USER_ID = `${BASE_ROUTE}/get-tasks/:userId`,
  GET_TASK_BY_USER_ID = `${BASE_ROUTE}/get-tasks/:userId/:taskId`,
  ASSIGN_RESPONSIBLE = `${BASE_ROUTE}/assign_responsible`,
  DELETE_RESPONSIBLE = `${BASE_ROUTE}/delete_responsible`,
  GET_PRIORITIES = `${BASE_ROUTE}/priorities`,
  GET_STATUS = `${BASE_ROUTE}/status`,
  UPDATE_TASK = `${BASE_ROUTE}/:taskId`,
  DELETE_TASK = `${BASE_ROUTE}/:taskId`,
}
