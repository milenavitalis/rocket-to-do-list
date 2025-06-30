import { Text, Icon, Badge } from "./components";
import {
  TrashIcon,
  CheckIcon,
  PlusIcon,
  SpinnerIcon,
  PencilIcon,
  XIcon,
} from "./assets/icons";

export default function App() {
  return (
    <>
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
      </div>
    </>
  );
}
