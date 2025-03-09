import { Task } from "@/model/task";

const STORAGE_KEY = "tasks";

export function getTasksFromStorage(): Task[] | null {
  const storedTasks = localStorage.getItem(STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : null;
}

export function saveTasksToStorage(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function clearTasksFromStorage() {
  localStorage.removeItem(STORAGE_KEY);
}