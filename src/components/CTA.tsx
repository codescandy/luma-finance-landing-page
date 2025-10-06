"use client";

import Link from "next/link";

export default function CTA() {

  return (
    <section className="bg-neutral-900 py-16 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl text-white font-bold mb-4">Ready to get clear?</h2>
        <p className="text-neutral-400 mb-8">
          Join thousands who’ve simplified their finances. Start free — no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
  <Link
            href=""
            className="btn btn-primary"
          >
            Get started — Free
          </Link>
            <Link
            href=""
            className="btn btn-outline-white"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </section>
  );
};
