import { useRef } from 'react';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { classNames } from '@/lib/classNames';
import './Button.css';

/** Renders an <a> when `href` is given, otherwise a <button>. `variant`: 'solid' | 'outline'. */
export default function Button({ href, variant = 'solid', magnetic = false, className, children, ...props }) {
  const elementRef = useRef(null);
  useMagneticEffect(elementRef, magnetic);

  const Element = href ? 'a' : 'button';
  const classes = classNames('button', variant === 'outline' && 'button--outline', className);

  return (
    <Element ref={elementRef} href={href} className={classes} {...props}>
      {children}
    </Element>
  );
}
