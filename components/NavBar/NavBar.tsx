import Styles from "./NavBar.module.scss";
import Link from "next/link";
import clsx from 'clsx';
import { useRouter } from 'next/router'
const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Create Product",
    href: "/new-product",
  },
];
const NavBar = () => {
  const router = useRouter()
  const links = pages.map((el, index) => {
    return (
      <Link key={`link${index}`} href={el.href}>
        <div className={clsx(Styles["navbar__links__link"], router.pathname === el.href && Styles['active-link'])}>{el.name}</div>
      </Link>
    );
  });
  return (
    <div className={Styles["navbar"]}>
      <div className="container">
        <div className={Styles["navbar__links"]}>
          <Link href="/">
            <div className={Styles["navbar__links__title"]}>
              My Shopping Store
            </div>
          </Link>
          {links}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
