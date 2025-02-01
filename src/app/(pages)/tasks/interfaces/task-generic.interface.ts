export interface TaskGenericInterface {
  id: number;
  created_at: Date;
  update_at: Date;
  title: string;
  description?: string;
  assignees: [
    {
      name: string;
      email: string;
      id: number
    }
  ];
  priority: {
    description: string;
  };
  status: {
    description: string;
  };
  board?: {
    id: number;
    title: string;
  };
}

export interface TasksGenericInterface {
  tasks: TaskGenericInterface[];
}
