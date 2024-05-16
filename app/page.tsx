import Image from "next/image";
import Link from "next/link";

import { Microscope, Github } from "lucide-react";

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
            alt="hiri-logo" />
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
    </main>
  );
}
