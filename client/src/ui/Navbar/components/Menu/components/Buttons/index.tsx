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

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [showModal])

    return (
        <>
            <div className='text-white mt-4' onClick={closeMenu}>
                <NavLink to='mylistings' className='mt-1 flex items-center gap-2'>
                    <IoCarSport size={35} color='white' />
                    <h2 className='font-semibold text-xl'>My listings</h2>
                </NavLink>
                <div className='mt-1 flex items-center gap-2' onClick={openModal}>
                    <BiMessageSquareAdd size={35} color='white' />
                    <h2 className='font-semibold text-xl'>List car</h2>
                </div>
                <div
                    className='mt-1 flex items-center gap-2'
                    onClick={() => {
                        console.log('Logged out')
                    }}
                >
                    <HiLogout size={35} color='white' />
                    <h2 className='font-semibold text-xl'>Logout</h2>
                </div>
            </div>
            {showModal && <CreateListing close={closeModal} />}
        </>
    )
}

export default Buttons
