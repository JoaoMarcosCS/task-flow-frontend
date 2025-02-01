export interface FinishTaskInterface {
  taskId: number;
  body: {
    statusId: number;
    boardId: number;
  };
}
