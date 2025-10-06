"use client";

import Link from "next/link";
import { IconArrowRight, IconCheck, IconX } from "@tabler/icons-react";

const comparisons = [
  {
    left: "Complicated dashboards",
    right: "Simple, focused overview",
  },
  {
    left: "Hidden charges",
    right: "Transparent pricing",
  },
  {
    left: "One-off reports",
    right: "Continuous, actionable insights",
  },
  {
    left: "Manual tagging",
    right: "Automatic categorization",
  },
  {
    left: "Designed for experts",
    right: "Designed for everyday people",
  },
];

export default function WhyChooseLuma() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* ✅ Section Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Replace complexity with clarity
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
          Many tools make things more confusing — Luma gives just what you need: visibility, nudges, and simplicity.
        </p>

        {/* ✅ Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="bg-neutral-800 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-neutral-200 mb-6">Typical apps</h3>
            <ul className="space-y-4">
              {comparisons.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-400">
                  <IconX size={22} className="text-red-500" />
                  <span>{item.left}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-lime-950 p-8 rounded-xl ">
            <h3 className="text-2xl font-semibold text-lime-500 mb-6">Luma</h3>
            <ul className="space-y-4">
              {comparisons.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lime-500">
                  <IconCheck size={22} className="text-lime-600" />
                  <span className="font-medium">{item.right}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </section>
  );
}
