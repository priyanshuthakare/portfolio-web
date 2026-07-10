import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// PriyanshuMark — "PT" logomark, viewBox 0 0 512 256
const MARK_PATH =
  "M0 0h192v64H0zM320 0h192v64H320zM0 64h64v64H0zM128 64h64v64h-64zM384 64h64v64h-64zM0 128h128v64H0zM384 128h64v64h-64zM0 192h64v64H0zM384 192h64v64h-64z"

export default function AppleIcon() {
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
          width="128"
          height="64"
          viewBox="0 0 512 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#fafafa" d={MARK_PATH} />
        </svg>
      </div>
    ),
    size
  )
}
