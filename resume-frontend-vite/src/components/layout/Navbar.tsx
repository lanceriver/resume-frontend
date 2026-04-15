import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/#about', label: 'About' },
  { to: '/#work', label: 'Work' },
  { to: '/blog', label: 'Journal' },
];

export function Navbar() {
  return (
    <header className="border-b border-[var(--color-rule)]">
      <nav className="mx-auto max-w-[1200px] px-6 lg:px-10 py-5 flex items-baseline justify-between gap-6">
        <Link
          to="/"
          className="font-display text-lg tracking-tight text-[var(--color-ink)] hover:text-[var(--color-spot)] transition-colors"
        >
          L.R.
        </Link>
        <ul className="flex items-baseline gap-6 md:gap-8 text-[13px] smallcaps text-[var(--color-ink-muted)]">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    'link-underline transition-colors',
                    isActive ? 'text-[var(--color-ink)]' : 'hover:text-[var(--color-ink)]',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
