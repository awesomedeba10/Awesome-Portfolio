import Link from 'next/link';
import { socialProfiles } from "../utils/pageData";

export default function SocialProfileList() {
    return (
        <ul className="body-social body-socialtwo py-3">
            {socialProfiles.map((profile, index) => (
            <li key={index}>
                <Link href={profile.link} target="_blank" rel="noopener noreferrer">
                    <i className={`fs-1 fab ${profile.icon}`} style={{ color: profile.color }}></i>
                </Link>
            </li>
            ))}
        </ul>
    );
}
