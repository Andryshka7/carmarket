import { Dispatch } from 'react'

const types = ['Fuel', 'Electric']

interface Props {
    type: string
    switchType: Dispatch<React.SetStateAction<string>>
}

const Type = ({ type, switchType }: Props) => (
    <div className='mt-5 flex w-full justify-between'>
        {types.map((item) => (
            <div
                onClick={() => switchType(item)}
                className={`text-[#858585] cursor-pointer transition duration-200 w-[45%] font-semibold text-lg flex items-center justify-center rounded focus:outline-none border-2 border-[#858585] h-12 ${
                    type === item ? 'bg-[#858585] text-neutral-700' : 'bg-transparent'
                }`}
                key={item}
            >
                {item}
            </div>
        ))}
    </div>
)

export default Type
