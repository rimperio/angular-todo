
export type task = {
  id: number;
  task: string;
  checked: boolean;
};

export type Tasks = {
  counter: number;
  tasks: task[];
};
