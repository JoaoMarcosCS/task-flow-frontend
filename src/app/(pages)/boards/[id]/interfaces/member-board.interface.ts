export interface MemberBoardInterface {
  id: number;
  name: string;
  email: string;
  role: {
    id: number;
    description: string;
  };
}
