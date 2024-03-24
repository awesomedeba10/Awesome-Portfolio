import Link from 'next/link';

export default function ElementFooterLink({name, redirectTo}) {
    return (
        <Link href={redirectTo || 'javascript:void(0)'}
            className="d-flex mt-6 cmn-footarrow align-items-center justify-content-between">
            <span
                className="fw_500 fs-seven n0-color">{name}</span>
            <span className="cmn-svg40">
                <img decoding="async"
                    src="/shapes/kqdznk8odyclu1l52nz.svg"
                    alt="image" className="svg"/>
            </span>
        </Link>
    );
}