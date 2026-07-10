import { ImageResponse } from "next/og"

// Generates the PWA PNG icons (any/maskable) from the "PT" logomark.
// e.g. /icons/192, /icons/512, /icons/512?maskable=1

export const dynamic = "force-static"

// PriyanshuMark — "PT" logomark, viewBox 0 0 512 256
const MARK_PATH =
  "M0 0h192v64H0zM320 0h192v64H320zM0 64h64v64H0zM128 64h64v64h-64zM384 64h64v64h-64zM0 128h192v64H0zM384 128h64v64h-64zM0 192h64v64H0zM384 192h64v64h-64z"

export function generateStaticParams() {
  return [{ size: "192" }, { size: "512" }]
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ size: string }> }
) {
  const { size: sizeParam } = await params
  const size = Number(sizeParam) || 512
  const maskable = new URL(request.url).searchParams.has("maskable")

  // Maskable icons need a safe zone: keep the mark within ~80% of the canvas.
  const markWidth = maskable ? size * 0.56 : size * 0.72

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
        }}
      >
        <svg
          width={markWidth}
          height={markWidth / 2}
          viewBox="0 0 512 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#fafafa" d={MARK_PATH} />
        </svg>
      </div>
    ),
    { width: size, height: size }
  )
}
