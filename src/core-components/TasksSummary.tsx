import Badge from "../components/Badge";
import Text from "../components/Text";
import useTasks from "../hooks/useTasks";

export default function TasksSummary() {
  const { createdTasksCount, concludedTasksCount } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{createdTasksCount}</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">
          Concluídas
        </Text>
        <Badge variant="primary">
          {concludedTasksCount} de {createdTasksCount}
        </Badge>
      </div>
    </>
  );
}
