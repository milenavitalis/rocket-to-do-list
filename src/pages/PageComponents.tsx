import {
  Text,
  Icon,
  Badge,
  Button,
  ButtonIcon,
  InputText,
  InputCheckbox,
  Card,
  Container,
  Skeleton,
} from "../components";
import {
  TrashIcon,
  CheckIcon,
  PlusIcon,
  SpinnerIcon,
  PencilIcon,
  XIcon,
} from "../assets/icons";

export default function PageComponents() {
  return (
    <Container className="flex gap-4 flex-col">
      <Text variant="body-md-bold" className="text-pink-base">
        Olá mundo!
      </Text>
      <div className="flex gap-3">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>
      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
        <Badge variant="primary" loading>
          2 de 5
        </Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={TrashIcon} loading />
      </div>

      <div className="space-y-2">
        <InputText />
        <InputText loading />
      </div>
      <div className="space-y-2">
        <InputCheckbox />
        <InputCheckbox loading />
      </div>
      <div>
        <Card size="md">
          <Text>Olá</Text>
        </Card>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
    </Container>
  );
}
