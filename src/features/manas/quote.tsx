import { DotGrid, SectionDivider } from "./manas-layout"

export function Quote() {
  return (
    <section className="mt-12">
      <SectionDivider />

      <div className="relative py-12 px-4">
        <span
          aria-hidden
          className="absolute top-4 left-0 font-serif select-none"
          style={{ fontSize: 56, color: "var(--manas-rails)", lineHeight: 1 }}
        >
          66
        </span>
        <blockquote
          className="text-center italic font-serif mx-auto"
          style={{ fontSize: 24, color: "var(--manas-text)", maxWidth: 520 }}
        >
          &ldquo;The first Principle is that you must not fool your self -- and you are the easiest
          person to fool&rdquo;
        </blockquote>
        <p
          className="text-center italic font-serif mt-4 text-sm"
          style={{ color: "var(--manas-muted)" }}
        >
          -- Richard Feyman --
        </p>
        <span
          aria-hidden
          className="absolute bottom-4 right-0 font-serif select-none"
          style={{ fontSize: 56, color: "var(--manas-rails)", lineHeight: 1 }}
        >
          99
        </span>
      </div>

      <DotGrid className="h-[80px]" />
    </section>
  )
}
