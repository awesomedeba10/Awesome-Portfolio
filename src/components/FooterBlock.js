import Link from 'next/link';

export default function FooterBlock() {
    return (
        <footer className="footer position-relative py-xxl-8 py-6">
            <div className="container">
                <div
                    className="footer-wrap d-grid gap-4 justify-content-center d-lg-flex align-items-center justify-content-lg-between">
                    <div className="footer-copyright">
                        With Love © <i className='fas fa-heart'></i> <Link href="/">iamaweomse!</Link>
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
                            <Link title="Project" href="/" className="nav-links">Project</Link>
                        </li>
                        <li id="menu-item-39"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-39 nav-item">
                            <Link title="Contact" href="/" className="nav-links">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}