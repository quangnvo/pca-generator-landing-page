import Link from "next/link"
import Image from "next/image"

import Marquee from "@/components/magicui/marquee"

function BuiltWith() {
    return (
        <div className="flex flex-col gap-5 md:gap-8 items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Built with</h2>

            < div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl" >

                <Marquee>
                    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
                        <div className="flex flex-row items-center gap-2">
                            <img className="rounded-full" width="32" height="32" alt="" src="https://avatar.vercel.sh/jack" />
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white">
                                    Jack
                                </figcaption>
                                <p className="text-xs font-medium dark:text-white/40">
                                    @jack
                                </p>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-sm">
                            I've never seen anything like this before. It's amazing. I love it.
                        </blockquote>
                    </figure>
                </Marquee>
            </div>
        </div>
    )
}

export default BuiltWith


