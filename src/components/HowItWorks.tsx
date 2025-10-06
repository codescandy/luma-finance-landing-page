"use client";

import { IconPlayerPlay } from "@tabler/icons-react";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-neutral-950 py-20">
      <div className="max-w-6xl mx-auto px-6 ">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white">How it works</h2>
        <p className="mt-3 text-lg text-neutral-400">
          Connect, see, and act — three simple steps to smarter money.
        </p>

        {/* Steps */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col  bg-neutral-900 p-4 rounded-lg ">
            <div className="relative ">

                <Image
              src={`${getImagePrefix()}/card.png`}
              alt="Connect your accounts"
              className="object-cover"
              width={400}
              height={100}
              />

            </div>
            <div className="pb-4">
            <h3 className="text-xl font-semibold text-white">
              1. Connect your accounts
            </h3>
            <p className="mt-3 text-neutral-400">
              Securely link your bank accounts, cards, and wallets in minutes —
              read-only access, bank-grade encryption.
            </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col  bg-neutral-900 p-4 rounded-lg ">
            <div className="relative">
               <Image
              src={`${getImagePrefix()}/card.png`}
              alt="Connect your accounts"
              className="object-cover"
              width={400}
              height={100}
              />
            </div>
            <h3 className="text-xl font-semibold text-white">
              2.Track your money
            </h3>
            <p className="mt-3 text-neutral-400">
              Real-time spending and income charts with auto-categorized
              transactions so you always know where your cash goes.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col  bg-neutral-900 p-4 rounded-lg ">
            <div className="relative">
               <Image
              src={`${getImagePrefix()}/card.png`}
              alt="Connect your accounts"
              className="object-cover"
              width={400}
              height={100}
              />
            </div>
            <h3 className="text-xl font-semibold text-white">
              3. Set goals & stay on track
            </h3>
            <p className="mt-3 text-neutral-400">
              Create savings targets, set monthly limits, and receive automated
              alerts that help you stick to the plan.
            </p>
          </div>
        </div>

        {/* CTA Button */}


        {/* Watch Video Button */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
           <button className=" btn btn-primary">
            Get started — it’s free
          </button>
          <button className="flex  gap-2 text-white hover:underline font-medium cursor-pointer">
            <IconPlayerPlay size={20} />
            Watch how it works
          </button>
        </div>
      </div>
    </section>
  );
}
