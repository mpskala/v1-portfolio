import Image from 'next/image'

import Container from '../components/Container'

export default function Home() {
	return (
		<Container>
			<div className='flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16'>
				<div className='flex flex-col-reverse sm:flex-row items-start'>
					<div className='flex flex-col pr-8'>
						<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
							Matthew Skala
						</h1>
						<h2 className='text-gray-700 dark:text-gray-200 mb-4'>
							Web Developer at{' '}
							<a
								href='https://www.footasylum.com/'
								className='font-bold hover:text-orange-500'
								target='_blank'
								rel='noreferrer'
							>
								FootAsylum
							</a>
						</h2>
					</div>
					<div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'>
						<Image
							alt='Matt Skala'
							height={176}
							width={176}
							src='/avatar.webp'
							className='rounded-full'
							layout='responsive'
							sizes='(min-width: 640px) 176px, 80px'
							priority
						/>
					</div>
				</div>
			</div>
		</Container>
	)
}
