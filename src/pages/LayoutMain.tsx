import { Outlet } from "react-router";
import Header from "../core-components/header";
import MainContent from "../core-components/MainContent";
import Footer from "../core-components/Footer";

export default function LayoutMain() {
  return (
    <>
      <Header />
      <MainContent className="mt-4 md:mt-8">
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}
