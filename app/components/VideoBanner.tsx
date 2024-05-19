import Image from 'next/image';

const VideoBanner = () => {
    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed text-center">Demo</h2>
            <div className="h-[55vh] md:h-[75vh] w-full md:w-9/12 mx-auto overflow-hidden border border-gray-300 rounded-md ">
                <Image
                    width="800"
                    height="450"
                    src="/images/123123.gif"
                    alt="pca-generator-screenshot"
                    unoptimized={true}
                    quality={100}
                />
            </div>
        </div>
    )
}

export default VideoBanner