import useLocalStorage from "use-local-storage";
import { Task, TASKS_KEY } from "../models/Task";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}