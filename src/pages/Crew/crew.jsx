import { useState } from 'react'
import data from "../../data.json";

import member1 from '../../assets/crew/image-douglas-hurley.webp';
import member2 from '../../assets/crew/image-mark-shuttleworth.webp';
import member3 from '../../assets/crew/image-victor-glover.webp';
import member4 from '../../assets/crew/image-anousheh-ansari.webp';

export default function crew() {

  const [name, setName] = useState("DOUGLAS HURLEY");
  const [role, setRole] = useState(data.crew[0].role.toUpperCase());
  const [profileImg, setProfileImg] = useState(member1);
  const [description, setDescription] = useState(data.crew[0].bio);

  const dot = "dot bg-white w-[15px] h-[15px] rounded-[100%] opacity-[30%]"
  const active = " active-dot"
  
  function handleDestination(e) {
    const dest = data.crew.find(x => x.name === e);

    setName(dest.name.toUpperCase());
    setDescription(dest.bio);
    setRole(dest.role.toUpperCase());

    const tags = document.querySelectorAll(".active-dot");
    tags.forEach(tag => {
        tag.classList.remove("active-dot");
    });

    switch (e) {
        case "Douglas Hurley":
            setProfileImg(member1);
            document.getElementsByClassName("dot")[0].classList.add("active-dot");
            break;
        case "Mark Shuttleworth":
            setProfileImg(member2);
            document.getElementsByClassName("dot")[1].classList.add("active-dot");
            break;
        case "Victor Glover":
            setProfileImg(member3);
            document.getElementsByClassName("dot")[2].classList.add("active-dot");
            break;
        case "Anousheh Ansari":
            setProfileImg(member4);
            document.getElementsByClassName("dot")[3].classList.add("active-dot");
            break;
        default:
            break;
    }
  }

  return (
    <section className="md:bg-crew-desktop sm:bg-crew-tablet bg-crew-mobile w-full bg-center bg-no-repeat bg-cover grid place-items-end h-screen max-md:h-full">
    <div className='flex justify-between lg:px-32 2sm:px-12 max-md:flex-col max-md:justify-center max-md:text-center items-center max-md:mt-[7rem]'>

    <div className='md:w-[55%]'>
      <h2 className='font-barlow-cond tracking-[4.72px] text-[28px] text-white'><span className="text-hover opacity-75">02</span> MEET YOUR CREW</h2>
      <article className='my-24'>
      <h3 className='font-belle text-[2rem] text-hover'>{role}</h3>
      <h1 className='font-belle text-[3.5rem] max-md:text-[2rem] text-white'>{name}</h1>
      <p className='text-white leading-8 font-barlow'>{description}</p>
      </article>
    
    <div className="flex gap-8 font-barlow-cond tracking-[2.74px] max-md:justify-center mb-8">
      <button className={dot + active} onClick={() => { handleDestination("Douglas Hurley"); }} ></button>
      <button className={dot} onClick={() => { handleDestination("Mark Shuttleworth"); }} ></button>
      <button className={dot} onClick={() => { handleDestination("Victor Glover"); }} ></button>
      <button className={dot} onClick={() => { handleDestination("Anousheh Ansari"); }} ></button>
    </div>

    </div>

    <img src={profileImg} alt="Crew Image" className='w-auto md:h-[550px] object-contain'/>
      
    </div>
    </section>
  )
}
