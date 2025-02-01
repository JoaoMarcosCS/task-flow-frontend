export interface UpdateTaskInterfaace {
  taskId: number;
  body: {
    title?: string;
    description?: string;
    boardId: number;
  };
}
