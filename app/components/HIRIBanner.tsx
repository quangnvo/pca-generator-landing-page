import Link from "next/link"
import Image from "next/image"

function HIRIBanner() {
    return (
        <div className="flex flex-col gap-5 md:gap-8 items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold">PCA Generator</h2>
            <p className="text-base">A project of</p>
            <Link
                href="https://www.helmholtz-hiri.de/" target="_blank"
            >
                <Image
                    src="/HIRI-logo.svg"
                    width={480}
                    height={200}
                    id="hiri-logo"
                    alt="hiri-logo"
                />
            </Link>
        </div>
    )
}

export default HIRIBanner