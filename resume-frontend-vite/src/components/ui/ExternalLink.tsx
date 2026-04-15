import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function ExternalLink({ children, className, ...rest }: ExternalLinkProps) {
  return (
    <a
      {...rest}
      target="_blank"
      rel="noreferrer noopener"
      className={['link-underline', className].filter(Boolean).join(' ')}
    >
      {children}
    </a>
  );
}
