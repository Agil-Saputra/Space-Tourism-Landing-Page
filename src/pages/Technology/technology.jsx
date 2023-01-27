import { useState } from 'react'
import data from "../../data.json";

export default function technology() {

  const [name, setName] = useState("Douglas Hurley");
  const [role, setRole] = useState(data.crew[0].role);
  const [profileImg, setProfileImg] = useState(member1);
  const [description, setDescription] = useState(data.crew[0].bio);

  const dot = "bg-red-400 w-[15px] h-[15px] rounded-[100%]"
  const active = "active-dot"
  
  function handleDestination(e) {
    const dest = data.crew.find(x => x.name === e);

    setName(dest.name.toUpperCase());
    setDescription(dest.bio);
    setRole(dest.role);

    const tags = document.querySelectorAll(".active-dot");
    tags.forEach(tag => {
        tag.classList.remove("active-dot");
    });

    switch (e) {
        case "Douglas Hurley":
            setProfileImg(member1);
            document.getElementsByClassName("link")[0].classList.add("active-dot");
            break;
        case "Mark Shuttleworth":
            setProfileImg(member2);
            document.getElementsByClassName("link")[1].classList.add("active-dot");
            break;
        case "Anousheh Ansari":
            setProfileImg(member4);
            document.getElementsByClassName("link")[3].classList.add("active-dot");
            break;
        default:
            break;
    }
  }

  return (
    <div className="md:bg-tech-desktop sm:bg-tech-tablet bg-tech-mobile w-full h-screen bg-center bg-no-repeat bg-cover"></div>

  )
}
