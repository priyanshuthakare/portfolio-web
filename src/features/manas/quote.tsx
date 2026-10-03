import { DotGrid, SectionDivider } from "./manas-layout"

export function Quote() {
  return (
    <section className="mt-12">
      <SectionDivider />

      <div className="relative py-10 px-4">
        <p
          aria-hidden
          className="text-center font-serif select-none mb-6"
          style={{ fontSize: 22, color: "var(--manas-rails)", lineHeight: 1, letterSpacing: "0.1em" }}
        >
          &ldquo;&ldquo;
        </p>
        <blockquote
          className="text-center mx-auto"
          style={{ fontSize: 26, color: "var(--manas-text)", maxWidth: 560, lineHeight: 1.5 }}
        >
          &ldquo;The first Principle is that you must not fool your self -- and you are the easiest
          person to fool&rdquo;
        </blockquote>
        <p
          className="text-center italic font-serif mt-6"
          style={{ fontSize: 15, color: "var(--manas-muted)" }}
        >
          -- Richard Feyman --
        </p>
      </div>

      <SectionDivider />
      <DotGrid className="h-[80px] mt-8" />
    </section>
  )
}
