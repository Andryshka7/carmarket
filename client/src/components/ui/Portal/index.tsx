import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Props {
	children: ReactNode
}

const portal = document.getElementById('portal')!

const Portal = ({ children }: Props) => createPortal(children, portal)

export default Portal
