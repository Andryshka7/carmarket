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
                className={`text-[#858585] cursor-pointer transition duration-200 w-[45%] font-semibold text-lg flex items-center justify-center rounded focus:outline-none border-2 border-[#858585] h-12 ${
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
