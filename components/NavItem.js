import { useRouter } from 'next/router'
import NextLink from 'next/link'
import cn from 'classnames'

export default function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-bold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg betterhover:hover:bg-gray-200 dark:betterhover:hover:bg-gray-800 transition-all'
        )}
      >
        {text}
      </a>
    </NextLink>
  )
}
