import Timeline from '/components/Timeline'
import Container from '/components/Container'

export default function About() {
	return (
		<Container title='Matthew Skala — About.'>
			<div className='flex flex-col justify-center items-start max-w-3xl mx-auto mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					About Me
				</h1>
				<div className='mb-8 prose leading-6 text-gray-600 dark:text-gray-400'>
					<p>
						Hey, I&apos;m Matt 👋🏻. I&apos;m a developer and an avid gym rat
						currently working as a web developer for FootAsylum.
					</p>
					<p>
						I grew up in Manchester, England and went to Manchester Metropolitan
						University, graduating with a Bachelor&apos;s in Computer Science.
						You can find me spending my free time playing games 🎮, at the gym
						🏋️‍♀️, listening to music 🎵 and relaxing with friends.
					</p>
				</div>

				<div className='max-w-2xl'>
					<Timeline />
				</div>
			</div>
		</Container>
	)
}
