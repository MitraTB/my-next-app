import { NavBar } from "../components";
const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <NavBar />
      <main></main>
    </>
  );
};
export default Layout;
