import Link from "next/link"
import Image from "next/image"

function HIRIBanner() {
    return (
        <div className=" w-full px-8 h-[300px] lg:h-newsletter text-center flex justify-center items-center">
            <div className="flex flex-col gap-5 md:gap-8 items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-bold">PCA Generator</h2>
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
        </div >
    )
}

export default HIRIBanner