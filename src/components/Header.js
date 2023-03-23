import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <div className="header-name">
          <h2>J</h2>
        </div>
      </Link>

      <nav className="menu">
        <Link href="/about">
          <h2>About</h2>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
