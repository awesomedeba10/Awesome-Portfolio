import HeadBlock from "./HeadBlock";
import FooterBlock from "./FooterBlock";

export default function Layout({ children, pageSpecificProperties }) {
    return (
        <>
            <HeadBlock title={pageSpecificProperties.title} />

            <div className="mouse-follower">
                <span className="cursor-outline"></span>
                <span className="cursor-dot"></span>
            </div>
            <div id="preloader">
                <div className="layla-preloader text-center"></div>
            </div>

            <main className="main overflow-hidden body-bg">
                <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap"></div>
                {children}
                <FooterBlock />
            </main>
        </>
    );
}
