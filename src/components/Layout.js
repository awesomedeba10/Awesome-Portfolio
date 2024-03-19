import HeadBlock from "./HeadBlock";
import FooterBlock from "./FooterBlock";

export default function Layout({ children }) {
    return (
        <>
            <HeadBlock/>
            {children}
            <FooterBlock/>
        </>
    );
}