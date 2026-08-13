interface IconProps {
  className?: string
}

function base(props: IconProps, path: React.ReactNode) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={props.className}
    >
      {path}
    </svg>
  )
}

export function Globe({ className }: IconProps) {
  return base(
    { className },
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M12 3c2.6 2.8 4 6.4 4 9s-1.4 6.2-4 9c-2.6-2.8-4-6.4-4-9s1.4-6.2 4-9z" />
    </>,
  )
}

export function Lightbulb({ className }: IconProps) {
  return base(
    { className },
    <>
      <path d="M15 14a6 6 0 1 0-6 0c0 2-1 3-3 3h12c-2 0-3-1-3-3z" />
      <path d="M9 20h6" />
      <path d="M10 23h4" />
    </>,
  )
}

export function ChevronsDown({ className }: IconProps) {
  return base(
    { className },
    <>
      <path d="m7 6 5 5 5-5" />
      <path d="m7 12 5 5 5-5" />
    </>,
  )
}

export function ArrowUpRight({ className }: IconProps) {
  return base(
    { className },
    <>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </>,
  )
}

export function Phone({ className }: IconProps) {
  return base(
    { className },
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />,
  )
}

export function Mail({ className }: IconProps) {
  return base(
    { className },
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m2 7 10 7 10-7" />
    </>,
  )
}

export function MessageCircle({ className }: IconProps) {
  return base(
    { className },
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
  )
}

export function MapPin({ className }: IconProps) {
  return base(
    { className },
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>,
  )
}
