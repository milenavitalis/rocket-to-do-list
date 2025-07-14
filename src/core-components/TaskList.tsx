import Button from "../components/Button";

import { PlusIcon } from "../assets/icons";
import TaskItem from "./TaskItem";

export default function TasksList() {
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full">
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
