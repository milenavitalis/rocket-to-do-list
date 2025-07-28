import Badge from "../components/Badge";
import Text from "../components/Text";
import useTasks from "../hooks/useTasks";

export default function TasksSummary() {
  const { createdTasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Badge variant="secondary" loading={isLoadingTasks}>
          {createdTasksCount}
        </Badge>
        <Badge variant="secondary">{createdTasksCount}</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">
          Concluídas
        </Text>
        <Badge variant="primary" loading={isLoadingTasks}>
          {concludedTasksCount} de {createdTasksCount}
        </Badge>
      </div>
    </>
  );
}
