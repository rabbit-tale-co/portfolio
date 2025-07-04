import type React from 'react'
import type { IconProps } from '@/icons/IconProps'

export const SolidLogo: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 108 168'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M81.238 90.093c-3.689-1.71-4.654-6.502-1.882-9.475a129.05 129.05 0 0 0 5.33-6.087A131.17 131.17 0 0 0 102.19 46.74c6.806-14.566 2.461-31.482-9.543-41.12-3.327-2.67-8.287-1.477-10.093 2.389L54.239 68.597l-6.323 13.531a6.614 6.614 0 0 1-5.991 3.813h-.043c-4.335 0-7.478-4.096-6.396-8.294a151.766 151.766 0 0 0 4.785-37.919C40.27 20.573 26.66 4.596 8.582.941 4.502.117.697 3.27.697 7.431v134.412c0 14 11.35 25.349 25.35 25.349h44.947c20.049 0 36.302-16.253 36.302-36.302.003-18.079-10.67-33.662-26.058-40.797Zm-46.874 47.064c-5.206 0-8.637-5.403-6.449-10.128 3.827-8.26 12.192-13.99 21.895-13.99s18.068 5.73 21.894 13.99c2.19 4.724-1.242 10.128-6.449 10.128h-30.89Z'
      fill='currentColor'
    />
  </svg>
)
