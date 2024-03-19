import HeadBlock from "./HeadBlock";
import FooterBlock from "./FooterBlock";

export default function Layout({ children, pageSpecificProperties }) {
    return (
        <>
            <HeadBlock title={pageSpecificProperties.title}/>
            {children}
            <FooterBlock/>
        </>
    );
}