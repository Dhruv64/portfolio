"use client";
import TextRotator from "./TextRotator";
import { SparklesCore } from "@/components/ui/sparkles";

const HeroTexts = () => {
  return (
    <>
      <div className="mt-32 w-full bg-white flex flex-col overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold relative z-20">
          <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
          <h1 className="font-rubik text-8xl text-primary max-sm:text-6xl ">
            Dhruv Parmar.
          </h1>
        </h1>
        <TextRotator />
        <div className="w-[80%] h-24 relative">
          {/* Gradients */}
          <div className="invisible lg:visible">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={2}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#5C47D0"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        
      </div>
    </>
  );
};
export default HeroTexts;
