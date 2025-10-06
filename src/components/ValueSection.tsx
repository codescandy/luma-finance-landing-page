"use client";

import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

export default function ValueSection() {
  return (
    <section id="showcase" className="py-20 bg-neutral-900 text-center">
      <div className="max-w-3xl mx-auto px-4">
        {/* ✅ Key Value Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">
          See your money clearly — act with confidence.
        </h2>

        {/* ✅ Supporting Paragraph */}
        <p className="text-lg text-neutral-400 mb-12">
          Luma turns noisy transactions into clear visuals and action items:
          balances, cashflow, budgets, and goal progress — all in a single,
          easy-to-scan view.
        </p>
      </div>

      {/* ✅ Hero Visual / Dashboard Image */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
          <div className="p-4 bg-neutral-950 rounded-lg">
        <Image
           src={`${getImagePrefix()}/card.png`}
          alt="Luma dashboard main"
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        </div>

          </div>
            <div className="p-4 bg-neutral-950 rounded-lg">
        <Image
         src={`${getImagePrefix()}/card.png`}
          alt="Gallery 1"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
          </div>
           <div className="p-4 bg-neutral-950 rounded-lg">
        <Image
           src={`${getImagePrefix()}/card.png`}
          alt="Gallery 2"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
          </div>
           <div className="p-4 bg-neutral-950 rounded-lg">
        <Image
           src={`${getImagePrefix()}/card.png`}
          alt="Gallery 3"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
          </div>
          <div className="p-4 bg-neutral-950 rounded-lg">
        <Image
           src={`${getImagePrefix()}/card.png`}
          alt="Gallery 4"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
          </div>
        </div>
      </div>
    </section>
  );
}
