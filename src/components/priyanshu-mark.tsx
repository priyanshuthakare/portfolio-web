export function PriyanshuMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h192v64H0zM320 0h192v64H320zM0 64h64v64H0zM128 64h64v64h-64zM384 64h64v64h-64zM0 128h128v64H0zM384 128h64v64h-64zM0 192h64v64H0zM384 192h64v64h-64z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="currentColor" d="M0 0h96v32H0zM160 0h96v32H160zM0 32h32v32H0zM64 32h32v32H64zM192 32h32v32h-32zM0 64h64v32H0zM192 64h32v32h-32zM0 96h32v32H0zM192 96h32v32h-32z"/></svg>`
}
