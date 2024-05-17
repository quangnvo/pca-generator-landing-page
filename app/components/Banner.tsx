import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

function Banner() {
    return (
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-center mt-16 xl:mt-28">
            <div className="w-full lg:w-4/6 mx-auto">

                <h1 className=" text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
                    Generate PCA plots with a single click
                </h1>

                <p className=" mt-5 text-base md:text-lg leading-normal md:leading-relaxed flex flex-col gap-1">
                    <span>
                        Built using Python scikit-learn library 📦
                    </span>
                    <span>
                        This tool is designed to help you easily generate Principal Component Analysis (PCA) plots from your data ✨
                    </span>
                </p>

                <div className=" mt-7 flex justify-center items-center">
                    <Link
                        href="https://github.com/quangnvo/pca-generator"
                        target="_blank"
                    >
                        <Button className="flex items-center gap-2 shadow-md">
                            <Github />
                            Github
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Check the "image-scroll-from-top-to-bottom" in the globals.css */}
            <div>
                <div className="relative h-[55vh] md:h-[75vh] w-full md:w-8/12 mx-auto overflow-hidden border border-gray-300 rounded-md shadow-xl image-scroll-from-top-to-bottom mt-10 md:mt-20">
                    <img
                        src="/images/pca-generator-screenshot.png"
                        alt="pca-generator-screenshot"
                        className="absolute top-0 transition-all duration-300 ease-linear"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner