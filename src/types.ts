export interface Action {
    id: number;
    text: string;
    type: string;
    filter: string;
}

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }