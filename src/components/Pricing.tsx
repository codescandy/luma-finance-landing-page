"use client";

import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      priceMonthly: 0,
      priceAnnual: 0,
      description: "3 linked accounts, dashboard, 1 goal, weekly email.",
      cta: "Start for free",
    },
    {
      name: "Plus",
      priceMonthly: 7,
      priceAnnual: 70, // ~2 months free if billed annually
      description:
        "Unlimited accounts, unlimited goals, CSV export, priority sync.",
      cta: "Upgrade to Plus",
    },
    {
      name: "Teams",
      priceMonthly: 24,
      priceAnnual: 240,
      description:
        "Shared accounts, multi-user roles, team goals, priority support.",
      cta: "Get Teams",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Plans that scale with you</h2>
        <p className="text-neutral-400 mb-12 max-w-2xl mx-auto">
          Start for free — upgrade only if you need extra power.
        </p>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-12 space-x-4">
          <span className={`font-medium ${!isAnnual ? "text-white" : "text-neutral-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
              isAnnual ? "bg-lime-600" : "bg-neutral-700"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`font-medium ${isAnnual ? "text-white" : "text-neutral-500"}`}>
            Annual <span className="text-sm text-green-400">(Save ~20%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className="bg-neutral-900  rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>

              <div className="mb-6">
                <span className="text-5xl font-bold">
                  ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                </span>
                <span className="text-neutral-400 text-lg font-medium">
                  {plan.name === "Teams"
                    ? isAnnual
                      ? " / year per team"
                      : " / month per team"
                    : isAnnual
                    ? " / year"
                    : " / month"}
                </span>
              </div>

              <p className="text-neutral-400 mb-8 min-h-[60px]">{plan.description}</p>

              <button
                className={`w-full py-3 ${
                  i === 1
                    ? "btn btn-primary"
                    : "btn btn-outline-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Microcopy */}
        <p className="text-neutral-500 text-sm mt-12">
          Prices in USD. Annual billing discounts available.
        </p>
      </div>
    </section>
  );
}
