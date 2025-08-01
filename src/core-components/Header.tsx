import { Container } from "../components";
import Logo from "../assets/images/logo.svg?react";

export default function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <Logo className="h-9 md:h-12" />
    </Container>
  );
}
