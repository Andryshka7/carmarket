const circleStyle = 'inline-block w-5 h-5 my-5 mx-1 rounded-full'

const Loader = () => (
    <div className='loader mx-auto flex h-5 w-fit items-center justify-center'>
        <div className={circleStyle} />
        <div className={circleStyle} />
        <div className={circleStyle} />
    </div>
)

export default Loader
