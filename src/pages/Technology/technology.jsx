import { useState } from 'react'
import { Link } from 'react-router-dom';
import data from "../../data.json";
// images
import launchP from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import launchL from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import capsuleP from '../../assets/technology/image-space-capsule-portrait.jpg'
import capsuleL from '../../assets/technology/image-space-capsule-landscape.jpg'
import portP from '../../assets/technology/image-spaceport-portrait.jpg'
import portL from '../../assets/technology/image-spaceport-landscape.jpg'

export default function technology() {

  const [name, setName] = useState("LAUNCH VEHICLE");
  const [imgP, setImgP] = useState(launchP);
  const [imgL, setImgL] = useState(launchL);
  const [description, setDescription] = useState(data.technology[0].description);

  const num = "link bg-transparent w-[60px] h-[60px] rounded-[100%] grid place-items-center border text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-[1.5rem]"
  const active = " active-num"
  
  function handleDestination(e) {
    const dest = data.technology.find(x => x.name === e);

    setName(dest.name.toUpperCase());
    setDescription(dest.description);

    const tags = document.querySelectorAll(".active-num");
    tags.forEach(tag => {
        tag.classList.remove("active-num");
    });

    switch (e) {
        case "Launch vehicle":
            setImgP(launchP);
            setImgL(launchL);
            document.getElementsByClassName("link")[0].classList.add("active-num");
            break;
        case "Spaceport":
            setImgP(portP);
            setImgL(portL);
            document.getElementsByClassName("link")[1].classList.add("active-num");
            break;
        case "Space capsule":
            setImgP(capsuleP);
            setImgL(capsuleL);
            document.getElementsByClassName("link")[2].classList.add("active-num");
            break;
        default:
            break;
    }
  }

  return (
    <div className="md:bg-tech-desktop sm:bg-tech-tablet bg-tech-mobile w-full lg:h-screen  bg-center bg-no-repeat bg-cover grid place-items-center">

<div className='flex text-white max-lg:flex-col flex-row-reverse lg:pl-40 gap-32 mt-[7rem] max-md:text-center max-md:mb-[3rem]'>


<img src={imgL} srcSet={`${imgP} 768w,`} alt={name} className='max-md:h-[310px] md:h-[427px] w-auto object-cover'/>


<div className='flex max-lg:flex-col gap-20 items-center'>

<nav className="flex lg:flex-col gap-8 font-barlow-cond tracking-[2.74px] max-lg:justify-center">
  <Link to="" className={num + active} onClick={() => { handleDestination("Launch vehicle"); }} >1</Link>
  <Link to="" className={num} onClick={() => { handleDestination("Spaceport"); }} >2</Link>
  <Link to="" className={num} onClick={() => { handleDestination("Space capsule"); }} >3</Link>
</nav>

<div className='w-[75%]'>
<p className='font-barlow tracking-[2.74px]'>THE TERMINOLOGY...</p>
<h1 className='font-belle text-[3.5rem] '>{name}</h1>
<p className='font-barlow leading-8'>{description}</p>
</div>




  
</div>


</div>
    </div>

  )
}
