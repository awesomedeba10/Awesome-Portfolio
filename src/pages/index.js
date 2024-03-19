import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/page1">Page2</Link>
      <Link href="/about"><i className="fas fa-home"></i>About</Link>
      <h1>From Home</h1>
    </div>
  );
}
