import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>From About Me</h1>
        </div>
    );
}

Home.pageProps = {
    title: "About Me",
};
