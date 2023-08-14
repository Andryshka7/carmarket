import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Portal } from 'ui'
import { Buttons, Filters } from './components'

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        if (!showMenu) {
            document.body.classList.add('overflow-hidden')
            setShowMenu(true)
        } else {
            document.body.classList.remove('overflow-hidden')
            setShowMenu(false)
        }
    }

    const visibility = showMenu ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'

    return (
        <div className='md:hidden'>
            <HiMenu size={35} color='white' onClick={toggleMenu} />
            <Portal>
                <div
                    className={`fixed left-0 top-0 flex h-full w-full overflow-y-scroll bg-neutral-700 transition duration-200 ${visibility}`}
                >
                    <div className='my-auto flex h-fit w-full flex-col items-center'>
                        <Filters />
                        <Buttons closeMenu={toggleMenu} />
                        <div>
                            <AiOutlineCloseCircle
                                color='white'
                                size={60}
                                onClick={toggleMenu}
                                className='my-5'
                            />
                        </div>
                    </div>
                </div>
            </Portal>
        </div>
    )
}

export default Menu
