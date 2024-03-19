import Link from "next/link";
import Image from 'next/image';

export default function Page1() {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>From About Me</h1>

            <Link
                className="image-popup-vertical-fit"
                href="http://farm9.staticflickr.com/8241/8589392310_7b6127e243_b.jpg"
                title="Caption. Can be aligned to any side and contain any HTML."
            >
                <img
                    src="http://farm9.staticflickr.com/8241/8589392310_7b6127e243_s.jpg"
                    width="75"
                    height="75"
                />
            </Link>
            <div style={{height: '100em'}}>
					<span>Long Div</span>
            </div>

            <div data-aos="fade-right">
					<span>AOS Testing</span>
            </div>
        </div>
    );
}
