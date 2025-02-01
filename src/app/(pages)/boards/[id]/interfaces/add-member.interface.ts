export interface AddMemberInterface {
  boardId: number;
  body: {
    userId: number;
    roleId: number;
  };
}
