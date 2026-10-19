export type AosAnimation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-in-up"
  | "zoom-in-down";

type AosOptions = {
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
  easing?: string;
};

export function aosProps(animation: AosAnimation, options: AosOptions = {}) {
  const delay = options.delay ?? 0;
  const duration = options.duration ?? 650;

  return {
    "data-aos": animation,
    "data-aos-delay": delay,
    "data-aos-duration": duration,
    style: {
      transitionProperty: "opacity, transform",
      transitionDelay: `${delay}ms`,
      transitionDuration: `${duration}ms`,
      transitionTimingFunction:
        options.easing === "ease-out-cubic"
          ? "cubic-bezier(0.215, 0.61, 0.355, 1)"
          : (options.easing ?? "cubic-bezier(0.215, 0.61, 0.355, 1)"),
    },
    ...(options.offset === undefined
      ? {}
      : { "data-aos-offset": options.offset }),
    ...(options.once === undefined ? {} : { "data-aos-once": options.once }),
    ...(options.easing === undefined
      ? {}
      : { "data-aos-easing": options.easing }),
  };
}
