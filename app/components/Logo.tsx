import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/">
            <span className="font-bold text-lg md:text-xl ">PCA Generator</span>
        </Link>
    )
}
