import Styles from "./NavBar.module.scss";
import Link from 'next/link';
const NavBar = () => {
  return (
    <div className={Styles["navbar"]}>
      <div className="container">
        <div className={Styles['navbar__links']}>
        <Link href="/"><div className={Styles['navbar__links__title']}>My Shopping Store</div></Link>
        <Link href="/"><div className={Styles['navbar__links__link']}>Home</div></Link>
        <Link href="/products"><div className={Styles['navbar__links__link']}>Products</div></Link>
        <Link href="/new-product"><div className={Styles['navbar__links__link']}>Create Product</div></Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
