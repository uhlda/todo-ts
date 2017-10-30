export interface Action {
    type: string;
    id?: number;
    text?: string;
    filter?: string;
}

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    onClick: () => Action;
}

export interface State {
    visibilityFilter: string;
    todos: Todo[];
}