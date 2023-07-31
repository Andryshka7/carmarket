import Car from './Car'
import useCarsStore from './store'

const Cars = () => {
    const { cars } = useCarsStore()

    return (
        <div className='my-4 flex flex-wrap justify-center gap-4'>
            {cars.map((car) => (
                <Car {...car} key={car.id} />
            ))}
        </div>
    )
}

export default Cars
