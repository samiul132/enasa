import React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const CTA = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      className="py-10 md:py-12 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden flex items-center"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mt-48 animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div id="cta" className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`mt-10 grid lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* LEFT TEXT */}
          <div className="text-white space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Make the <span className="text-accent-blue">Invisible Visible?</span>
            </h2>
            <p className="text-lg text-white/90">
              Join hundreds of organizations using AirlytiQ to detect risks before they become problems.
            </p>
          </div>

          {/* RIGHT FORM */}
          <form className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 shadow-2xl text-white">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                  placeholder="you@company.com"
                />
              </div>

              {/* Use Case */}
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Use Case</label>
                <select
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                  defaultValue="Food & Beverage"
                >
                  <option className="text-black">Food & Beverage</option>
                  <option className="text-black">Industrial Safety</option>
                  <option className="text-black">Environmental Monitoring</option>
                  <option className="text-black">Healthcare</option>
                  <option className="text-black">Security & Hazard Detection</option>
                  <option className="text-black">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                  placeholder="Tell us about your needs..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-white/90 text-primary font-semibold px-4 py-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition transform hover:scale-[1.03]"
            >
              Request Demo
            </button>

            <p className="mt-3 text-xs text-white/70">
              By submitting, you agree to our Terms & Privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
