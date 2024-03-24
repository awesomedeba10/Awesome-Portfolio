import { Vollkorn } from "next/font/google";

export const vollkorn = Vollkorn({
    weight: ["400", "500", "600", "700"],
    style: ['normal', 'italic'],
    subsets: ['cyrillic', 'latin'],
    preload: true,
});