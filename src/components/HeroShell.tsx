import type { ReactNode } from "react";

export type HeroVisualType =
  | "screenshot"
  | "codeSnippet"
  | "mcpConfig"
  | "illustration"
  | "none";

export type HeroImage = {
  /** Preferred optimized source (WebP). */
  src: string;
  /** Optional fallback for browsers without WebP support. */
  fallbackSrc?: string;
  /** Optional responsive sources, e.g. "hero@1x.webp 640w, hero@2x.webp 1280w". */
  srcSet?: string;
  sizes?: string;
  alt: string;
  width?: number;
  height?: number;
};

export type HeroCta = {
  label: string;
  action: () => void;
};

export type HeroShellProps = {
  h1: string;
  subline: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  visualType?: HeroVisualType;
  /** Image object for screenshot/illustration; string for code/config snippets; node for custom. */
  visualContent?: HeroImage | string | ReactNode;
  /** Optional label above a code/config block, e.g. "mcp.json". */
  visualLabel?: string;
  /** Page density: "comfortable" uses display-1 (44px), "compact" uses h1 (36px). */
  density?: "comfortable" | "compact";
};

function isHeroImage(value: unknown): value is HeroImage {
  return typeof value === "object" && value !== null && "src" in value;
}

function HeroImageVisual({ image }: { image: HeroImage }) {
  return (
    <picture>
      {image.fallbackSrc ? <source srcSet={image.src} type="image/webp" /> : null}
      <img
        src={image.fallbackSrc ?? image.src}
        srcSet={image.srcSet}
        sizes={image.sizes}
        alt={image.alt}
        width={image.width}
        height={image.height}
        decoding="async"
        fetchPriority="high"
        className="w-full rounded-md border border-smoke/15"
      />
    </picture>
  );
}

function HeroCodeVisual({ code, label }: { code: string; label?: string }) {
  return (
    <div className="w-full overflow-hidden rounded-md border border-smoke/20 bg-smoke/[0.04] text-left">
      {label ? (
        <div className="border-b border-smoke/20 px-4 py-2.5">
          <span className="font-mono text-xs tracking-wide text-smoke/60">{label}</span>
        </div>
      ) : null}
      <pre className="overflow-x-auto px-4 py-4">
        <code className="font-mono text-sm leading-relaxed text-smoke/85">{code}</code>
      </pre>
    </div>
  );
}

function HeroVisual({
  visualType,
  visualContent,
  visualLabel,
}: Pick<HeroShellProps, "visualType" | "visualContent" | "visualLabel">) {
  if (!visualType || visualType === "none" || !visualContent) return null;

  if (visualType === "screenshot" || visualType === "illustration") {
    return isHeroImage(visualContent) ? (
      <HeroImageVisual image={visualContent} />
    ) : (
      <>{visualContent as ReactNode}</>
    );
  }

  if (visualType === "codeSnippet" || visualType === "mcpConfig") {
    return typeof visualContent === "string" ? (
      <HeroCodeVisual
        code={visualContent}
        label={visualLabel ?? (visualType === "mcpConfig" ? "mcp.json" : undefined)}
      />
    ) : (
      <>{visualContent as ReactNode}</>
    );
  }

  return <>{visualContent as ReactNode}</>;
}

export function HeroShell({
  h1,
  subline,
  primaryCta,
  secondaryCta,
  visualType = "none",
  visualContent,
  visualLabel,
  density = "comfortable",
}: HeroShellProps) {
  const hasVisual = visualType !== "none" && Boolean(visualContent);
  const headingClass = density === "compact" ? "heading-h1" : "display-1";

  return (
    <section className="w-full bg-carbon">
      <div
        className={[
          "mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:py-24",
          hasVisual
            ? "grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            : "flex flex-col items-center",
        ].join(" ")}
      >
        <div
          className={[
            "flex min-w-0 flex-col text-center lg:text-left",
            hasVisual ? "items-center lg:items-start" : "max-w-2xl items-center text-center",
          ].join(" ")}
        >
          <h1 className={`${headingClass} text-smoke`}>{h1}</h1>
          <p className="text-body-base mt-5 max-w-xl text-smoke/70 sm:text-base">{subline}</p>

          <div
            className={[
              "mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center",
              hasVisual ? "justify-center lg:justify-start" : "justify-center",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={primaryCta.action}
              className="button-lg inline-flex h-12 items-center justify-center rounded-md bg-cornflower px-6 text-carbon transition-colors hover:bg-cornflower/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smoke"
            >
              {primaryCta.label}
            </button>
            {secondaryCta ? (
              <button
                type="button"
                onClick={secondaryCta.action}
                className="button-lg inline-flex h-12 items-center justify-center rounded-md border border-smoke px-6 text-smoke transition-colors hover:bg-smoke/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smoke"
              >
                {secondaryCta.label}
              </button>
            ) : null}
          </div>
        </div>

        {hasVisual ? (
          <div className="min-w-0">
            <HeroVisual
              visualType={visualType}
              visualContent={visualContent}
              visualLabel={visualLabel}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default HeroShell;
