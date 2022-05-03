import Navbar from "./Navbar";
import Footer from "./Footer";
import { Main } from "../../styles/Layout";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
