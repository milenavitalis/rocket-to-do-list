import Container from "../components/Container";
import TasksSummary from "../core-components/TasksSummary";
import TaskList from "../core-components/TaskList";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>
      <TaskList />
    </Container>
  );
}
