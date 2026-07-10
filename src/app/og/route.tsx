import { readFileSync } from "node:fs"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { USER } from "@/features/portfolio/data/user"

const geistSemiBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-SemiBold.ttf")
)

const geistMonoRegular = readFileSync(
  join(process.cwd(), "src/assets/fonts/GeistMono-Regular.ttf")
)

// PriyanshuMark — "PT" logomark, viewBox 0 0 512 256
const MARK_PATH =
  "M0 0h192v64H0zM320 0h192v64H320zM0 64h64v64H0zM128 64h64v64h-64zM384 64h64v64h-64zM0 128h192v64H0zM384 128h64v64h-64zM0 192h64v64H0zM384 192h64v64h-64z"

export async function GET() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full bg-black text-zinc-50">
        <div tw="absolute inset-y-0 left-12 flex w-px border border-zinc-800" />
        <div tw="absolute inset-y-0 right-12 flex w-px border border-zinc-800" />
        <div tw="absolute inset-x-0 top-12 flex h-px border border-zinc-800" />
        <div tw="absolute inset-x-0 bottom-12 flex h-px border border-zinc-800" />

        <div tw="absolute top-18 left-18 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 256"
            width={160}
            height={80}
          >
            <path fill="currentColor" d={MARK_PATH} />
          </svg>
        </div>

        <div tw="absolute inset-x-0 top-40 bottom-24 flex flex-col justify-end border-t-2 border-zinc-800">
          <div
            tw="border-t-2 border-zinc-800 px-18"
            style={{
              fontFamily: "GeistSans",
              fontWeight: 600,
              fontSize: 88,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {USER.displayName}
          </div>

          <div tw="flex flex-col">
            <div
              tw="border-t-2 border-b-2 border-zinc-800 px-18 py-8 text-zinc-400"
              style={{
                fontFamily: "GeistMono",
                fontWeight: 400,
                fontSize: 36,
                lineHeight: 1.25,
              }}
            >
              {USER.jobTitle}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "GeistSans",
          data: geistSemiBold,
          weight: 600,
        },
        {
          name: "GeistMono",
          data: geistMonoRegular,
          weight: 400,
        },
      ],
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=31536000, immutable",
      },
    }
  )
}
