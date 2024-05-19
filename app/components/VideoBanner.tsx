import Image from 'next/image';

const VideoBanner = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed text-center">Demo</h2>

            <Image
                width="1000"
                height="700"
                src="/images/bbbbb.gif"
                alt="pca-generator-screenshot"
                unoptimized={true}
                quality={100}
                className='border border-gray-300 rounded-md shadow-xl '
            />

        </div>
    )
}

export default VideoBanner