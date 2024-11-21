import Link from "next/link";

export function Header() {
    return (
        <div className="flex justify-between mb-[66px] content-center">
            <div className="font-bold text-2xl">
                <Link href={'/'}>Lite.</Link>
            </div>

            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/posts'}>Blog</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul> 
            </nav>
        </div>
    );
}