import React from "react";
import {
  ButtonIcon,
  Card,
  InputCheckbox,
  Text,
  InputText,
} from "../components";
import { TrashIcon, PencilIcon, XIcon, CheckIcon } from "../assets/icons";
import { Task, TaskState } from "../models/Task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/useTask";
import Skeleton from "../components/Skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const { updateTask, updateTaskStatus, deleteTask } = useTask();
  const [taskTitle, setTaskTitle] = React.useState(task.title || "");
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  );
  function handleEditTask() {
    setIsEditing(true);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }
  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await updateTask(task.id, { title: taskTitle });

    setIsEditing(false);
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  async function handleDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            value={task.concluded?.toString()}
            checked={task.concluded}
            onChange={handleChangeTaskStatus}
          />
          {!loading ? (
            <Text className={cx("flex-1", { "line-through": task?.concluded })}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleDeleteTask}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              type="button"
              onClick={handleExitEditTask}
            />
            <ButtonIcon
              type="submit"
              icon={CheckIcon}
              variant="primary"
              disabled={taskTitle.trim().length === 0}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
