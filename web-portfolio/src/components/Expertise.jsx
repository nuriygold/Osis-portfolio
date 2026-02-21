import React from "react";

/**
 * @param {{
 *   title: string;
 *   items: Array<{ title: string; description: string }>;
 *   trailingHeadline?: string;
 *   id?: string;
 *   className?: string;
 * }} props
 */
export default function Expertise({
  title,
  items,
  trailingHeadline,
  id = "about",
  className = "",
}) {
  return (
    <section
      id={id}
      className={`border-t border-white/10 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id={`${id}-heading`}
          className="mb-8 text-2xl font-semibold tracking-tight text-white sm:mb-10 sm:text-3xl lg:mb-12 lg:text-4xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          {title}
        </h2>
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-12" role="list">
          {items.map((item, index) => (
            <div key={item.title + index} className="space-y-2 sm:space-y-3" role="listitem">
              <h3
                className="text-lg font-semibold text-white sm:text-xl"
                style={{ letterSpacing: "-0.01em" }}
              >
                {item.title}
              </h3>
              <p className="text-base leading-[1.4] text-white/90 sm:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
        {trailingHeadline && (
          <p
            className="mt-12 text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:mt-16 sm:text-4xl md:mt-20 md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            {trailingHeadline}
          </p>
        )}
      </div>
    </section>
  );
}
