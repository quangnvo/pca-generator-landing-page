import Link from "next/link";
import Image from "next/image";
import Video from 'next-video';

import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
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
    <main className="container flex flex-col gap-14 md:gap-20 mt-10 md:mt-10">
      <div>
        <h1 className="text-3xl md:text-6xl font-bold text-center mb-32 border-b border-black pb-6">PCA Generator</h1>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="font-semibold text-base md:text-lg">
            A project of
          </p>
          <Link
            href="https://www.helmholtz-hiri.de/" target="_blank"
            className="border border-gray-200 rounded-md px-10 py-7 hover:bg-slate-50"
          >
            <Image
              src="/HIRI-logo.svg"
              width={500}
              height={200}
              id="hiri-logo"
              alt="hiri-logo"
            />
          </Link>
        </div>
      </div>



      <div className="text-center flex flex-col gap-4">
        <p className="text-2xl md:text-3xl font-semibold flex gap-2 justify-center items-center">
          <span>
            Welcome to the PCA Generator
          </span>
        </p>


        <p className="text-lg">
          This tool is designed to help you generate a Principal Component Analysis (PCA) plot easily from your data.
        </p>

        <div className="flex items-center justify-center">
          <Link
            href="https://github.com/quangnvo/pca-generator"
            target="_blank"
          >
            <Button className="flex items-center gap-2" variant="outline">
              <Github />
              Github
            </Button>
          </Link>
        </div>
      </div>


      {/* Check the "image-scroll-from-top-to-bottom" in the globals.css */}
      <div>
        <div className="relative h-[70vh] w-full md:w-10/12 mx-auto overflow-hidden border border-black rounded-sm shadow-xl image-scroll-from-top-to-bottom">
          <img
            src="/images/pca-generator-screenshot.png"
            alt="pca-generator-screenshot"
            className="absolute top-0 transition-all duration-300 ease-linear"
          />
        </div>
      </div>

      <div>
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
    </main>
  );
}
