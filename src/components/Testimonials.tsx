"use client";

import Image from "next/image";


const testimonials = [
  {
    name: "Priya S.",
    role: "Freelance Developer",
    quote:
      "Luma made budgeting painless. I actually hit my emergency fund faster than I expected.",
    avatar: "/avatar/avatar-1.jpg",
  },
  {
    name: "Rohit M.",
    role: "Small Business Owner",
    quote:
      "Easy to share summaries with my accountant. Saves me hours every single month.",
    avatar: "/avatar/avatar-2.jpg",
  },
  {
    name: "Sana A.",
    role: "Teacher",
    quote:
      "The weekly tips nudged me to cancel unused subscriptions — small wins added up.",
    avatar: "/avatar/avatar-3.jpg",
  },
  {
    name: "Amit K.",
    role: "Designer",
    quote:
      "Finally, a finance tool that feels built for humans. Everything is clear and visual.",
    avatar: "/avatar/avatar-4.jpg",
  },
  {
    name: "Nisha P.",
    role: "Freelancer",
    quote:
      "The auto-categorization is a lifesaver. I spend less time managing money and more time earning it.",
    avatar: "/avatar/avatar-5.jpg",
  },
  {
    name: "Arjun T.",
    role: "Startup Founder",
    quote:
      "From cashflow to goals, everything is just a glance away. It replaced three tools for me.",
    avatar: "/avatar/avatar-6.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonilas" className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className=" mb-16 flex flex-col lg:flex-row lg:gap-16">
          <div className="lg:w-xl">
          <h2 className="text-4xl leading-12 font-bold text-white">
            Stories from people who switched
          </h2>
          </div>
           <div className="lg:w-xl">
          <p className="text-neutral-400 mt-3 max-w-2xl ">
            Real experiences from independent workers and small teams using
            Luma. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maiores, sed reiciendis quibusdam hic placeat incidunt omnis facere asperiores voluptatibuseserunt ipsam?
          </p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid bg-neutral-800 shadow-sm rounded-2xl p-6 hover:shadow-md transition"
            >

              <p className="text-neutral-400 italic leading-relaxed">“{t.quote}”</p>
              <div className="flex items-center mt-4">
                <Image
                src={t.avatar}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />

                <div className="ml-4">
                  <p className="font-semibold text-neutral-200 text-sm">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
