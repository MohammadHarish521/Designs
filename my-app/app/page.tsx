"use client";

import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Navigation from "./components/Navigation";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Metrics />
      <div className="w-full flex justify-center relative h-12 bg-neutral-50 dark:bg-neutral-950 overflow-visible z-0">
        <svg
          className="absolute -top-6 w-[600px] h-24 overflow-visible hidden md:block"
          viewBox="0 0 600 100"
          fill="none"
        >
          <path
            d="M 300 -50 V 20 Q 300 50 200 50 H 100 Q 0 50 0 80 V 100"
            stroke="currentColor"
            className="text-neutral-200 dark:text-neutral-800"
            strokeWidth="1"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 300 -50 V 20 Q 300 50 200 50 H 100 Q 0 50 0 80 V 100"
            stroke="currentColor"
            className="text-neutral-900 dark:text-white beam-travel"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 300 -50 V 20 Q 300 50 400 50 H 500 Q 600 50 600 80 V 100"
            stroke="currentColor"
            className="text-neutral-200 dark:text-neutral-800"
            strokeWidth="1"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 300 -50 V 20 Q 300 50 400 50 H 500 Q 600 50 600 80 V 100"
            stroke="currentColor"
            className="text-neutral-900 dark:text-white beam-travel"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
            style={{ animationDelay: "1.5s" }}
          />
        </svg>
        <svg
          className="absolute top-0 w-px h-16 overflow-visible md:hidden"
          viewBox="0 0 2 64"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="64"
            stroke="currentColor"
            className="text-neutral-200 dark:text-neutral-800 beam-line"
          />
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="64"
            stroke="currentColor"
            className="text-neutral-900 dark:text-white beam-travel"
          />
        </svg>
      </div>
      <BentoGrid />
      <Testimonial />
      <Footer />
    </>
  );
}
