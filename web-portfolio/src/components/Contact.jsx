import React from "react";

/**
 * @param {{
 *   email: string;
 *   heading?: string;
 *   profileImageSrc?: string | null;
 *   profileImageAlt?: string;
 *   id?: string;
 *   className?: string;
 * }} props
 */
export default function Contact({
  email,
  heading = "Let's talk!",
  profileImageSrc = null,
  profileImageAlt = "Profile",
  id = "contact",
  className = "",
}) {
  const mailto = `mailto:${email}`;

  return (
    <section
      id={id}
      className={`border-t border-white/10 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#141414] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
            {profileImageSrc ? (
              <img
                src={profileImageSrc}
                alt={profileImageAlt}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-[10px] text-[#C4C4C4] sm:text-xs">
                Photo
              </span>
            )}
          </div>
          <h2
            id={`${id}-heading`}
            className="text-2xl font-semibold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            {heading}
          </h2>
        </div>
        <a
          href={mailto}
          className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-5 sm:py-3.5 sm:text-base md:px-6 md:py-4 md:text-lg break-all sm:break-normal"
        >
          {email}
          <span aria-hidden className="hidden sm:inline">→</span>
        </a>
      </div>
    </section>
  );
}
