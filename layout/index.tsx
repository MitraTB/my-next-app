import { NavBar } from "../components";
const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
