import { useEffect, useState } from 'react'
import { IoCarSport } from 'react-icons/io5'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { HiLogout } from 'react-icons/hi'
import { CreateListing } from 'ui/Modals'
import { NavLink } from 'react-router-dom'

interface Props {
    closeMenu: () => void
}

const Buttons = ({ closeMenu }: Props) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        document.body.classList.add('overflow-hidden')
        setShowModal(true)
    }
    const closeModal = () => {
        document.body.classList.remove('overflow-hidden')
        setShowModal(false)
    }

    return (
        <>
            <div className='mt-4 text-white' onClick={closeMenu}>
                <NavLink to='mylistings' className='mt-1 flex items-center gap-2'>
                    <IoCarSport size={35} color='white' />
                    <h2 className='text-xl font-semibold'>My listings</h2>
                </NavLink>
                <div className='mt-1 flex items-center gap-2' onClick={openModal}>
                    <BiMessageSquareAdd size={35} color='white' />
                    <h2 className='text-xl font-semibold'>List car</h2>
                </div>
                <div
                    className='mt-1 flex items-center gap-2'
                    onClick={() => {
                        console.log('Logged out')
                    }}
                >
                    <HiLogout size={35} color='white' />
                    <h2 className='text-xl font-semibold'>Logout</h2>
                </div>
            </div>
            {showModal && <CreateListing close={closeModal} />}
        </>
    )
}

export default Buttons
