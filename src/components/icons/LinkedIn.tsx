export default function LinkedInIcon({
  className = "w-5 h-5",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.983 3.5A2.49 2.49 0 0 0 2.5 6c0 1.38 1.12 2.5 2.483 2.5A2.49 2.49 0 0 0 7.466 6c0-1.38-1.12-2.5-2.483-2.5ZM3 9.75h3.966V21H3V9.75Zm7.47 0H14.4v1.56h.053c.464-.88 1.598-1.807 3.292-1.807 3.522 0 4.172 2.319 4.172 5.335V21h-3.965v-5.004c0-1.193-.022-2.728-1.664-2.728-1.667 0-1.922 1.303-1.922 2.641V21H10.47V9.75Z" />
    </svg>
  );
}
