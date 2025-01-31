export interface UpdateBoardInterface {
  boardId: number;
  body: {
    title?: string;
    description?: string;
  };
}
