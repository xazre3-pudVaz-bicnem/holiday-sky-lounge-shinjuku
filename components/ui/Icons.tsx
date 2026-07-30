type IconProps = { className?: string };

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M4 12h15" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path
        d="M6.2 3.5h2.9l1.4 3.6-1.9 1.4a12.4 12.4 0 0 0 5.5 5.5l1.4-1.9 3.6 1.4v2.9a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PalmIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.4 9.1c.6 3 .3 6.6-.4 11.4l1.9.3c.3-4.8.4-8.4.2-11.4Z" />
      <path d="M12.6 8.2c1.5-1.9 3.6-2.7 5.6-1.7.4.2.3.7-.1.8-1.6.4-3 1.2-4.1 2.4Z" />
      <path d="M11.7 8.2C10.3 6.1 8.2 5.2 6.1 6c-.4.2-.4.7 0 .8 1.7.4 3.1 1.1 4.3 2.3Z" />
      <path d="M12.1 7.6c.4-2.4 2-4 4.2-4.1.5 0 .6.5.3.8-1.4 1-2.4 2.2-3 3.7Z" />
      <path d="M11.6 7.6c-.7-2.3-2.4-3.7-4.6-3.5-.4 0-.5.5-.2.8 1.5.8 2.7 1.9 3.4 3.3Z" />
    </svg>
  );
}
