import Link from "next/link"
import Image from "next/image"

function HIRIBanner() {
    return (
        <div className="bg-gradient w-full px-8 h-[300px] lg:h-newsletter text-center flex justify-center items-center">
            <div className="">
                <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">PCA Generator</h2>
                <p className="mt-2 text-base">A project of</p>

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
        </div >
    )
}

export default HIRIBanner