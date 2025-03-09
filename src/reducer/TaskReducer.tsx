import { Task } from "@/model/task";
const CURRENT_USER_ID = 1;
export type TaskState = Task[];
export type TaskAction =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "TOGGLE_TASK"; payload: number };

// Reducer Function
export function TaskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [...state, { id: Date.now(), userId: CURRENT_USER_ID, title: action.payload, completed: false }];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}