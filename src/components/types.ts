export interface Action {
    type: string;
    id?: number;
    text?: string;
    filter?: string;
}

export interface Todo {
    id: number;
    active: boolean;
    text: string;
    completed: boolean;
  }