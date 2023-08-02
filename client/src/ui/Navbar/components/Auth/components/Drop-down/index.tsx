import { useEffect, useState } from 'react'
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
            {showDropdown && (
                <div className='rounded-lg text-white bg-neutral-600 absolute top-14 right-16 py-2 z-[1]'>
                    <NavLink
                        to='/mylistings'
                        className='my-1 flex items-center gap-2 px-6 cursor-pointer hover:bg-neutral-500'
                    >
                        <IoCarSport size={25} color='white' />
                        <h2 className='font-semibold text-lg'>My listings</h2>
                    </NavLink>
                    <div
                        className='my-1 flex items-center gap-2 px-6 cursor-pointer hover:bg-neutral-500'
                        onClick={openModal}
                    >
                        <BiMessageSquareAdd size={25} color='white' />
                        <h2 className='font-semibold text-lg'>List car</h2>
                    </div>
                    <div
                        className='my-1 flex items-center gap-2 px-6 cursor-pointer hover:bg-neutral-500'
                        onClick={() => {
                            console.log('Logged out')
                        }}
                    >
                        <HiLogout size={25} color='white' />
                        <h2 className='font-semibold text-lg'>Logout</h2>
                    </div>
                </div>
            )}
            {showModal && <CreateListing close={closeModal} />}
        </>
    )
}

export default Dropdown
