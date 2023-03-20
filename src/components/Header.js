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
        <h2>Info</h2>
      </nav>
    </header>
  );
};

export default Header;
