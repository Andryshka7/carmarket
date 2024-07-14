import { useEffect, useRef, useState } from 'react'
import { CgCloseR } from 'react-icons/cg'

import { Portal } from 'components/ui'

interface Props {
	image: string
	exit: () => void
}

const ImageViewer = ({ image, exit }: Props) => {
	const [isBigEnough, setIsBigEnough] = useState(false)

	const containerRef = useRef<null | HTMLDivElement>(null)
	const imageRef = useRef<null | HTMLImageElement>(null)

	useEffect(() => {
		const handleResize = () => {
			const container = containerRef.current
			const image = imageRef.current

			if (container && image && image.clientHeight >= container.clientHeight) {
				setIsBigEnough(true)
			} else {
				setIsBigEnough(false)
			}
		}

		handleResize()

		document.body.classList.add('overflow-hidden')
		window.addEventListener('resize', handleResize)

		return () => {
			document.body.classList.remove('overflow-hidden')
			document.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<Portal>
			<div
				ref={containerRef}
				className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center overflow-auto bg-black"
			>
				<img src={image} ref={imageRef} className={`w-full ${!isBigEnough && 'mt-16'}`} />
				{isBigEnough ? (
					<CgCloseR
						size={50}
						color="white"
						onClick={exit}
						className="fixed right-8 top-3"
					/>
				) : (
					<button
						className="my-4 rounded border bg-neutral-900 px-4 py-0.5 text-lg font-medium text-white duration-200 hover:bg-neutral-800"
						onClick={exit}
					>
						Close
					</button>
				)}
			</div>
		</Portal>
	)
}

export default ImageViewer
