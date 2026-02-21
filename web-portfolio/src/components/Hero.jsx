import React from "react";

/**
 * @param {{
 *   headline: string;
 *   email: string;
 *   introText: string;
 *   scrollToId?: string;
 *   className?: string;
 * }} props
 */
export default function Hero({ headline, email, introText, scrollToId = "#projects", className = "" }) {
  const mailto = `mailto:${email}`;

  return (
    <section
      className={`px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 md:px-8 md:pt-20 md:pb-24 lg:px-12 lg:pt-24 lg:pb-32 ${className}`}
      aria-label="Introduction"
    >
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <h1
            className="text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[4rem] 2xl:text-[5.5rem]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {headline}
          </h1>
        </div>
        <div className="flex flex-col gap-8 sm:gap-10 md:justify-between lg:col-span-4">
          <div>
            <p className="mb-1 text-base font-medium text-white sm:text-lg">Let&apos;s Talk</p>
            <a
              href={mailto}
              className="text-sm text-white/90 underline decoration-white/50 underline-offset-2 hover:decoration-white sm:text-base break-all"
            >
              {email}
            </a>
          </div>
          <div>
            <p
              className="mb-4 max-w-md text-base leading-[1.4] text-white/95 sm:mb-6 sm:text-lg"
              style={{ letterSpacing: "-0.01em" }}
            >
              {introText}
            </p>
            <a
              href={scrollToId}
              className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-4 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:px-5 sm:py-3 sm:text-sm"
            >
              SCROLL DOWN ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
