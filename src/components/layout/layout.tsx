import { ReactElement, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }): ReactElement => (
  <div style={{ backgroundColor: "rgb(240, 242, 245)" }}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
