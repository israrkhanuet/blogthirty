import Link from "next/link";
import stylen from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className={stylen.nav1}>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/">Blogs</Link>
        </li>
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
