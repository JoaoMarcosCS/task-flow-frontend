export interface BoardDetailsInterface {
  id: number;
  created_at: Date;
  update_at: Date;
  title: string;
  description?: string;
  members: [
    {
      id: number;
      name: string;
      email: string;
    }
  ];
  tasks: [
    {
      id: number;
      created_at: Date;
      update_at: Date;
      title: string;
      description?: string;
      assignees: [
        {
          name: string;
          email: string;
        }
      ];
      priority: {
        description: string;
      };
      status: {
        description: string;
      };
    }
  ];
}

export interface BoardUsersRolesInterface {
  userId: number;
  boardId: number;
  role: {
    id: number;
    description: string;
  };
}

export interface BoardDetailsResponseInterface {
  board: BoardDetailsInterface;
  total_members: number;
  total_tasks: number;
  board_users_roles: BoardUsersRolesInterface[];
}
