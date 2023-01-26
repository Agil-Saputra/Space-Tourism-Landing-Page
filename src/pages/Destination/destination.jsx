import React, { useState } from "react";
import { Link } from "react-router-dom";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import titan from "../../assets/destination/image-titan.png";
import europa from "../../assets/destination/image-europa.png";
import data from "../../data.json";

export default function destination() {
  const link = "link py-4 my-4 relative before:content-[''] before:absolute before:w-full before:h-[3px] hover:before:bg-hover before:bottom-0 before:left-0 before:transition-all before:duration-300 before:ease-in-out"
  const active = "link py-4 my-4 relative before:content-[''] before:absolute before:w-full before:h-[3px] hover:before:bg-hover before:bottom-0 before:left-0 before:transition-all before:duration-300 before:ease-in-out active"
  const [destination, setDestination] = useState("MOON");
  const [destinationImage, setDestinationImage] = useState(moon);
  const [description, setDescription] = useState(data.destinations[0].description);
  const [distance, setDistance] = useState(data.destinations[0].distance);
  const [travel, setTravel] = useState(data.destinations[0].travel);

  function handleDestination(e) {
    const dest = data.destinations.find(x => x.name === e);

    setDestination(dest.name.toUpperCase());
    setDescription(dest.description);
    setDistance(dest.distance);
    setTravel(dest.travel);

    const tags = document.querySelectorAll(".active");
    tags.forEach(tag => {
        tag.classList.remove("active");
    });
    switch (e) {
        case "Moon":
            setDestinationImage(moon);
            document.getElementsByClassName("link")[0].classList.add("active");
            break;
        case "Mars":
            setDestinationImage(mars);
            document.getElementsByClassName("link")[1].classList.add("active");
            break;
        case "Europa":
            setDestinationImage(europa);
            document.getElementsByClassName("link")[2].classList.add("active");
            break;
        case "Titan":
            setDestinationImage(titan);
            document.getElementsByClassName("link")[3].classList.add("active");
            break;
        default:
            break;
    }
}

  return (

    <section className="md:bg-destination-desktop 2sm:bg-destination-tablet bg-destination-mobile w-full bg-no-repeat grid place-items-center items-center bg-cover md:px-24">
        <div className='flex lg:flex-row flex-col md:justify-between justify-center items-center text-white md:gap-36 gap-12 lg:text-left text-center mt-[12rem]'>
      <img src={destinationImage} alt="destination image" className=''/>
      <div className='lg:w-[40%] w-full'>

      <nav className="flex gap-8 font-barlow-cond tracking-[2.74px] max-lg:justify-center">
                    <Link to="" className={active} onClick={() => { handleDestination("Moon"); }} >MOON</Link>
                    <Link to="" className={link} onClick={() => { handleDestination("Mars"); }} >MARS</Link>
                    <Link to="" className={link} onClick={() => { handleDestination("Europa"); }} >EUROPA</Link>
                    <Link to="" className={link} onClick={() => { handleDestination("Titan"); }} >TITAN</Link>
      </nav>

        <h1 className='text-8xl font-belle'>{destination}</h1>
        <p className='font-barlow leading-8 border-b-2 border-hover py-6'>{description}</p>
        <article className='flex items-center gap-20 mt-8 justify-between'>
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
      <div className="bg-red-400 w-full grid place-items-end mt-[5rem] px-24 relative">
    </div>
    </section>
  )
}
