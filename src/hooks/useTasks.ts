import { delay } from "../helpers/utils";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { Task, TASKS_KEY, TaskState } from "../models/Task";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }

  useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    tasksCount: tasks.length,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
      .length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
