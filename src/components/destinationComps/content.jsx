

export default function content({img, place, description, distance, time}) {
  return (
    <div className='flex lg:flex-row flex-col justify-between items-center text-white gap-36 lg:text-left text-center'>
      <img src={destinationImg} alt="destination image" className=''/>
      <div className='lg:w-[40%] w-full'>

      <div className="dest-link">
                    <Link to="" className="dest-link-item dest-link-item-active" onClick={() => { handleDestination("Moon"); }} >MOON</Link>
                    <Link to="" className="dest-link-item" onClick={() => { handleDestination("Mars"); }} >MARS</Link>
                    <Link to="" className="dest-link-item" onClick={() => { handleDestination("Europa"); }} >EUROPA</Link>
                    <Link to="" className="dest-link-item" onClick={() => { handleDestination("Titan"); }} >TITAN</Link>
                </div>

        <h1 className='text-8xl font-belle'>{destination}</h1>
        <p className='font-barlow leading-8 border-b-2 border-hover py-6'>{description}</p>
        <article className='flex items-center gap-20 mt-8'>
          <div>
            <p className='font-barlow-cond tracking-[2.36px]'>AVG. DISTANCE</p>
            <h3 className='font-belle text-3xl'>{distance}</h3>
          </div>
          <div>
            <p className='font-barlow-cond tracking-[2.36px]'>EST. TRAVEL TIME</p>
            <h3 className='font-belle text-3xl'>{travel}</h3>
          </div>
        </article>
      </div>
    </div>
  )
}
