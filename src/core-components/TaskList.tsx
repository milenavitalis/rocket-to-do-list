import Button from "../components/Button";
import { PlusIcon } from "../assets/icons";
import TaskItem from "./TaskItem";
import useTasks from "../hooks/useTasks";
import useTask from "../hooks/useTask";

export default function TasksList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();
  console.log(tasks);

  function handleNewTask() {
    prepareTask();
  }
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
