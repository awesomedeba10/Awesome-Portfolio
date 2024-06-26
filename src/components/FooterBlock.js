import Link from 'next/link';
import { kanit } from "../utils/fonts";
import { userData } from '../utils/pageData';

export default function FooterBlock() {
    return (
        <footer className="footer position-relative pb-6 pt-4 mb-3">
            <div className="container px-0">
                <div
                    className={`footer-wrap d-grid gap-4 justify-content-center d-lg-flex align-items-center justify-content-lg-between footer-custom-text ${kanit.className}`}>
                    <div className="footer-copyright">
                        Developed with <i className='fas fa-heart px-2' style={{ color: 'red' }}></i> by {userData.name} © 2024
                    </div>
                    <ul id="menu-footer-menu"
                        className="footer-link justify-content-center flex-wrap position-relative cus-z1">
                        <li id="menu-item-40"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-23 current_page_item active menu-item-40 nav-item">
                            <Link title="Home" href="/" className="nav-links">Home</Link>
                        </li>
                        <li id="menu-item-38"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38 nav-item">
                            <Link title="About" href="/about" className="nav-links">About</Link>
                        </li>
                        <li id="menu-item-41"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41 nav-item">
                            <Link title="Project" href="/portfolio" className="nav-links">Project</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}