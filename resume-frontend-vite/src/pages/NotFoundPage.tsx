import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-32 text-center">
      <p className="smallcaps text-[12px] text-[var(--color-ink-muted)] mb-4">
        Page not found
      </p>
      <h1
        className="font-display text-[var(--color-spot)] leading-none"
        style={{ fontSize: 'clamp(96px, 18vw, 240px)', fontWeight: 400 }}
      >
        404
      </h1>
      <p className="mt-8 font-display italic text-[22px] text-[var(--color-ink-muted)]">
        Nothing here. Probably never was.
      </p>
      <p className="mt-8">
        <Link to="/" className="link-underline font-mono smallcaps text-[12px] text-[var(--color-ink)]">
          → Go home
        </Link>
      </p>
    </div>
  );
}
