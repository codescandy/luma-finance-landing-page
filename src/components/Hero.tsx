"use client";

import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

export default function Hero() {
  return (
    <section id="product" className="relative bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Money that makes sense
        </h1>

        {/* Subheadline */}
        <h2 className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-lg">
          One simple dashboard to see balances, control spending, and hit your goals.
        </h2>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="btn btn-primary">
            Start free today
          </button>
          <button className="btn btn-outline-white">
            Watch a 25-second demo
          </button>
        </div>

        {/* Microcopy */}
        <p className="mt-4 text-sm text-neutral-400">
          Connect instantly · Bank-level security · No surprises
        </p>

        {/* Hero Image */}
        <div className="relative mt-12">
  <Image
    src={`${getImagePrefix()}/hero-img.avif`}
    alt="Hero Image"
    width={1000}
    height={200}

    className=""
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-lg"></div>
</div>

      </div>

    </section>
  );
}
