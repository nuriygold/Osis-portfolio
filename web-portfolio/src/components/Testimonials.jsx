import React from "react";

/**
 * @param {{
 *   title: string;
 *   quote: string;
 *   attribution: string;
 *   className?: string;
 * }} props
 */
export default function Testimonials({
  title,
  quote,
  attribution,
  className = "",
}) {
  return (
    <section
      className={`border-t border-white/10 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 ${className}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="testimonials-heading"
          className="mb-6 text-2xl font-semibold tracking-tight text-white sm:mb-8 sm:text-3xl lg:text-4xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          {title}
        </h2>
        <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl md:text-2xl lg:text-3xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="mt-4 text-sm text-right text-[#C4C4C4] sm:mt-6 sm:text-base">{attribution}</p>
      </div>
    </section>
  );
}
