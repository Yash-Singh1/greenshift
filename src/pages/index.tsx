import Image from "next/image";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import React from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(import("../components/ReactGlobe"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-start gap-y-10 p-6 sm:p-12 md:p-24 ${inter.className}`}
    >
      <h1 className="text-6xl flex flex-nowrap gap-x-1 tracking-tight">
        <p className="text-green-300">Green</p>
        <p className="text-green-500">Shift</p>
      </h1>
      <p className="text-lg text-center">
        Empowering environmental change
        <span className="hidden md:inline">, one pound at a time</span>
      </p>
      <div className="flex flex-col gap-y-4">
        <div onClick={() => window.open('https://trash-go.space', 'blank')} className="bg-white/5 w-max border hover:border-white border-transparent outline outline-1 outline-gray-100 rounded-lg p-4 cursor-pointer">
          <div className="flex flex-wrap items-center gap-x-2">
            <img
              className="rounded-full"
              src="/Birthday.png"
              width={50}
              height={50}
            />
            <h1>FreshFind</h1>
          </div>
          <p className="w-[40ch] mt-1">
            A platform allowing users to post their location for leftover
            produce pickup
          </p>
        </div>
        <div onClick={() => window.open('https://trash-go.space', 'blank')} className="bg-white/5 w-max border hover:border-white border-transparent outline outline-1 outline-gray-100 rounded-lg p-4 cursor-pointer">
          <div className="flex flex-wrap items-center gap-x-2">
            <img
              className="rounded-full"
              src="/trashgo-removebg-preview.png"
              width={50}
              height={50}
            />
            <h1>TrashGo</h1>
          </div>
          <p className="w-[40ch] mt-1">
            Uber for trash. A platform allowing government workers to broadcast
            trash pickup locations.
          </p>
        </div>
      </div>
      <Suspense fallback={null}>
        <Globe />
      </Suspense>
    </main>
  );
}
