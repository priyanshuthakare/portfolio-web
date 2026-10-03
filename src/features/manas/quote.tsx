import { DotGrid, SectionDivider } from "./manas-layout"

export function Quote() {
  return (
    <section className="mt-12">
      <SectionDivider />

      <div className="relative py-10 px-4">
        <p
          aria-hidden
          className="text-center font-serif select-none"
          style={{ fontSize: 38, color: "var(--manas-rails)", lineHeight: 1, letterSpacing: "0.08em", marginBottom: 60 }}
        >
          &ldquo;&ldquo;
        </p>
        <blockquote
          className="text-center mx-auto font-bold italic tracking-tight"
          style={{ fontSize: 30, color: "#3f3f46", maxWidth: 600, lineHeight: 1.4 }}
        >
          &ldquo;The first Principle is that you must not fool your self -- and you are the easiest
          person to fool&rdquo;
        </blockquote>
        <h2
          className="text-center mt-6"
          style={{ fontSize: 17, color: "var(--manas-muted)", fontFamily: "cursive" }}
        >
          -- Richard Feyman --
        </h2>
      </div>

      <SectionDivider />
      <DotGrid className="h-[80px] mt-8" />
    </section>
  )
}
