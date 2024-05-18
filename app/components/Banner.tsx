import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"


function Banner() {
    return (
        <div className="text-center flex flex-col gap-5">
            <h1 className=" text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
                Generate PCA plot with a single click
            </h1>

            <p className="text-base md:text-lg leading-normal md:leading-relaxed">
                <span>
                    Built using Python scikit-learn library 📦
                </span>
            </p>

            <div className="flex justify-center items-center">
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
    )
}

export default Banner