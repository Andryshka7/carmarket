import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoCarSport } from 'react-icons/io5'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { HiLogout } from 'react-icons/hi'
import { CreateListing } from 'ui/Modals'

interface Props {
    showDropdown: boolean
}

const Dropdown = ({ showDropdown }: Props) => {
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
            {showDropdown && (
                <div className='absolute right-16 top-14 z-[1] rounded-lg bg-neutral-600 py-2 text-white'>
                    <NavLink
                        to='/mylistings'
                        className='my-1 flex cursor-pointer items-center gap-2 px-6 hover:bg-neutral-500'
                    >
                        <IoCarSport size={25} color='white' />
                        <h2 className='text-lg font-semibold'>My listings</h2>
                    </NavLink>
                    <div
                        className='my-1 flex cursor-pointer items-center gap-2 px-6 hover:bg-neutral-500'
                        onClick={openModal}
                    >
                        <BiMessageSquareAdd size={25} color='white' />
                        <h2 className='text-lg font-semibold'>List car</h2>
                    </div>
                    <div
                        className='my-1 flex cursor-pointer items-center gap-2 px-6 hover:bg-neutral-500'
                        onClick={() => {
                            console.log('Logged out')
                        }}
                    >
                        <HiLogout size={25} color='white' />
                        <h2 className='text-lg font-semibold'>Logout</h2>
                    </div>
                </div>
            )}
            {showModal && <CreateListing close={closeModal} />}
        </>
    )
}

export default Dropdown
