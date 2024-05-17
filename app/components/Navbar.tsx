import Link from "next/link"
import Image from "next/image"

function Navbar() {
    return (
        <div className="container py-6 md:py-10 flex justify-between items-center">
            <span className="font-bold text-lg md:text-xl ">PCA Generator</span>
            <Link
                href="https://www.helmholtz-hiri.de/"
                target="_blank"
                className="md:block hidden"
            >
                <Image
                    src="/HIRI-logo.svg"
                    width={240}
                    height={200}
                    id="hiri-logo"
                    alt="hiri-logo"
                />
            </Link>
        </div>
    )
}

export default Navbar