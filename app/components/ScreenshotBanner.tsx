
const ScreenshotBanner = () => {
    return (
        <div className="relative h-[45vh] md:h-[75vh] w-full md:w-9/12 mx-auto overflow-hidden border border-gray-300 rounded-md shadow-xl image-scroll-from-top-to-bottom">
            <img
                src="/images/pca-generator-screenshot.png"
                alt="pca-generator-screenshot"
                className="absolute top-0 transition-all duration-300 ease-linear"
            />
        </div>
    )
}

export default ScreenshotBanner