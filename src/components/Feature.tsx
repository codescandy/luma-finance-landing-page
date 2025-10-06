"use client";

import Link from "next/link";
import {
  IconLayoutDashboard,
  IconChartBar,
  IconChartPie,
  IconTargetArrow,
  IconTrendingUp,
  IconShieldLock,
} from "@tabler/icons-react";

const features = [
  {
    icon: <IconLayoutDashboard size={40} stroke={1.5} className="text-lime-500" />,
    title: "Smart dashboard",
    desc: "All your accounts, balances and goals in one glance.",
  },
  {
    icon: <IconChartBar size={40} stroke={1.5} className="text-lime-500" />,
    title: "Cashflow overview",
    desc: "Daily income vs spending trends so you can plan ahead.",
  },
  {
    icon: <IconChartPie size={40} stroke={1.5} className="text-lime-500" />,
    title: "Spending breakdown",
    desc: "Category-level insights and an interactive donut chart.",
  },
  {
    icon: <IconTargetArrow size={40} stroke={1.5} className="text-lime-500" />,
    title: "Savings goals",
    desc: "Create funds, invite collaborators, and watch progress update in real time.",
  },
  {
    icon: <IconTrendingUp size={40} stroke={1.5} className="text-lime-500" />,
    title: "Weekly reports",
    desc: "Digestible email snapshots with highlights and trends.",
  },
  {
    icon: <IconShieldLock size={40} stroke={1.5} className="text-lime-500" />,
    title: "Secure & private",
    desc: "Data encrypted end-to-end — we never sell your info.",
  },
];

export default function Feature() {
  return (
    <section id="features" className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* ✅ Section Title */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Designed for clarity, built for better money decisions
        </h2>

        {/* ✅ Features Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-neutral-900 p-8 rounded-xl shadow-sm hover:shadow-[0_4px_14px_0_rgba(132,204,22,0.5)] transition-shadow duration-300 text-left cursor-pointer"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* ✅ CTA Button */}
        <div className="mt-12">
          <Link
            href=""
            className="btn btn-primary"
          >
            Try features
          </Link>
        </div>
      </div>
    </section>
  );
}
