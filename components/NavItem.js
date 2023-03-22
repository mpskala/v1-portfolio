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
						? 'font-bold text-gray-800 dark:text-gray-200 cursor-default'
						: 'font-normal text-gray-600 dark:text-gray-400 betterhover:hover:text-lightHighlight dark:betterhover:hover:text-darkHighlight transition-colors duration-300',
					'hidden md:inline-block p-1 sm:px-3 sm:py-2'
				)}
			>
				{text}
			</a>
		</NextLink>
	)
}
