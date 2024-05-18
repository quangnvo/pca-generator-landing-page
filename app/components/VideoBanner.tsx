"use client"

import ReactPlayer from 'react-player';
import Video from 'next-video';
import Image from 'next/image';



const VideoBanner = () => {


    return (
        // <div className="w-full md:w-9/12 mx-auto border border-gray-300 rounded-md shadow-xl overflow-hidden">
        //     <Video
        //         src="/videos/aaaaa.mp4"
        //     />
        // </div>
        // <div className="w-full md:w-9/12 mx-auto border border-gray-300 rounded-md shadow-xl overflow-hidden">
        //     <ReactPlayer
        //         width="100%"
        //         height="100%"
        //         url="/videos/aaaaa.mp4"
        //         controls={true}
        //         loop={true}
        //         volume={0}
        //         muted={true}
        //     />
        // </div>


        <Image
            width="800"
            height="450"
            src="/images/pca-generator-screenshot.gif"
            alt="pca-generator-screenshot"
            unoptimized={true}
            quality={100}
        />

    )
}

export default VideoBanner