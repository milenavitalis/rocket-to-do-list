import React from "react";
import {
  ButtonIcon,
  Card,
  InputCheckbox,
  Text,
  InputText,
} from "../components";
import { TrashIcon, PencilIcon, XIcon, CheckIcon } from "../assets/icons";

export default function TaskItem() {
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox />
          <Text className="flex-1">🛒 Fazer compras da semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
