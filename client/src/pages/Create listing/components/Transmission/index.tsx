import { Dispatch } from 'react'

const transmissions = ['Automatic', 'Manual']

interface Props {
    transmission: string
    switchTransmission: Dispatch<React.SetStateAction<string>>
}

const Transmission = ({ transmission, switchTransmission }: Props) => (
    <div className='mt-2 flex w-full justify-between'>
        {transmissions.map((item) => (
            <div
                onClick={() => switchTransmission(item)}
                className={`flex h-12 w-[45%] cursor-pointer items-center justify-center rounded border-2 border-[#858585] text-lg font-semibold text-[#858585] transition duration-200 focus:outline-none ${
                    transmission === item ? 'bg-[#858585] text-neutral-700' : 'bg-transparent'
                }`}
                key={item}
            >
                {item}
            </div>
        ))}
    </div>
)

export default Transmission
