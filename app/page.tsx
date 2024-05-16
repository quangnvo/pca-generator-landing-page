import Link from "next/link";
import Image from "next/image";
import Video from 'next-video';

import { Microscope, Github } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="container flex flex-col gap-20">
      <div>
        <h1 className="text-4xl font-semibold">PCA Generator</h1>
        <a href="https://www.helmholtz-hiri.de/" target="_blank">
          <Image
            src="/HIRI-logo.svg"
            width={200}
            height={200}
            id="hiri-logo"
            alt="hiri-logo"
          />
        </a>
      </div>

      <div>
        <p className="text-lg">Welcome to the PCA Generator</p>
        <p className="text-lg">
          This tool is designed to help you generate a Principal Component Analysis (PCA) plot from your data.
        </p>
      </div>

      <div className="">
        <Link
          href="https://github.com/quangnvo/pca-generator"
          target="_blank"
          className="flex items-center gap-2"
        >
          <Github />
          Github
        </Link>

        <Link
          href="https://www.helmholtz-hiri.de/en/"
          target="_blank"
          className="flex items-center gap-2"
        >
          <Microscope />
          HIRI
        </Link>
      </div>

      {/* Check the "image-scroll-from-top-to-bottom" in the globals.css */}
      <div>
        <h1>Screenshot</h1>
        <div className="relative h-[70vh] w-full md:w-10/12 mx-auto overflow-hidden border border-black rounded-sm shadow-xl image-scroll-from-top-to-bottom">
          <img
            src="/images/pca-generator-screenshot.png"
            alt="pca-generator-screenshot"
            className="absolute top-0 transition-all duration-300 ease-linear"
          />
        </div>
      </div>

      <div>
        <h1>Video</h1>
        <div className="w-full md:w-10/12 mx-auto border border-black rounded-sm shadow-sm">
          <Video
            src="/videos/aaaaa.mp4"
          />
        </div>
      </div>

      <div>
        <h1>Feature</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <div className="col-span-1">aaa</div>
          <div className="col-span-1">aaa</div>
          <div className="col-span-1">aaa</div>
        </div>
      </div>

      <footer>
        PCA Generator © 2024
      </footer>
    </main>
  );
}
