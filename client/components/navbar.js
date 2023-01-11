import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <h1>Stream</h1>
        <li className="item"><Link href="TV Shows">TV Shows</Link></li>
        <li className="item"><Link href="Movies">Movies</Link></li>
        <li className="nav-end item"><Link href="Categories">Categories</Link></li>
        <li className="item"><input placeholder="search"></input></li>
        <li className="item"><Link href="/">Home</Link></li>
      </ul>
    </nav>
  );
}
