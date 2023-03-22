import { useEffect, useRef } from 'react'

const ProgressBar = () => {
	const pSection = useRef(null)
	const pBar = useRef(null)
	const pNum = useRef(null)

	useEffect(() => {
		const updateScrollCompletion = () => {
			const currentProgress = window.scrollY
			const scrollHeight = document.body.scrollHeight - window.innerHeight
			if (scrollHeight) {
				const percentage = Number(currentProgress / scrollHeight) * 100
				pBar.current.style.height = `${percentage}%`
				pNum.current.innerText = `${Math.ceil(percentage)}%`
			}
		}
		window.addEventListener('scroll', updateScrollCompletion)

		return () => {
			window.removeEventListener('scroll', updateScrollCompletion)
		}
	}, [])

	return (
		<div
			ref={pSection}
			className='hidden lg:flex will-change-transform fixed right-16 top-[16.6%] w-14 h-2/3 justify-between'
		>
			<div className='relative w-0.5 rounded-xl overflow-hidden bg-gray-300 dark:bg-gray-700'>
				<div
					ref={pBar}
					className='progress-bar absolute w-full bg-gray-700 dark:bg-gray-300 rounded-xl'
				/>
			</div>
			<div ref={pNum}>0%</div>
		</div>
	)
}
export default ProgressBar
