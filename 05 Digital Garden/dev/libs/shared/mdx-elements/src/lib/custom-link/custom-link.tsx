import Link from 'next/link';
import styles from './custom-link.module.css';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  as:string,
  href:string,
}

export function CustomLink({as,href,...otherProps}:CustomLinkProps) {
  return (
    <Link as={as} href={href} className='bg-slate-800' {...otherProps} >
    
    </Link>
  );
}

export default CustomLink;
