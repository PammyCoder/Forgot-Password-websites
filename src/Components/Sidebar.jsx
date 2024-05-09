import React, {useState} from 'react'
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { SiPhosphoricons } from "react-icons/si";
import { MdOutlineSearch } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { SiPowerpages} from "react-icons/si";
import { MdPermMedia } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { SiSimpleanalytics } from "react-icons/si";
import { RiInboxArchiveFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";


const Sidebar = () => {
const [open, setOpen] = useState(true);
const [submenuOpen, setSubmenuOpen]=useState(false);
const Menus =[
  {title:"Dashboard"},
  {title:"Pages",icon:<SiPowerpages />},
  {title:"Media", spacing:true,icon: <MdPermMedia />},
  {
    title:"Projects", icon: <GoProjectSymlink />,
    submenu:true,
    submenuItems:[
      {title: "Submenu1"},
      {title: "Submenu2"},
      {title: "Submenu3"},
    ],
  },
  {title: "Analytics", icon: <SiSimpleanalytics />},
  {title: "Inbox", icon:<RiInboxArchiveFill />},
  {title: "Profile", spacing:true, icon:<CgProfile />},
  {title: "Setting", icon:<IoIosSettings />},
  {title: "Logout", icon:<IoMdLogOut />},
];
  return (
  
    <div className='flex'>
    <div className={`bg-purple-600 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300  relative`}><BsArrowLeftCircleFill className={`text-white text-3xl absolute -right-3 top-9 border border-purple-500  w-9 cursor-pointer rounded-full ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>

<div className='inline-flex'>
<SiPhosphoricons className={`bg-white text-4xl rounded-full cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
<h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>PammyCoder</h1></div>
 <div className={`flex items-center rounded-md bg-white mt-6 h-6 ${!open ? "px-2.4" : "py-4"}  `}><MdOutlineSearch className={` text-2xl text-purple-700  block float-left cursor-pointer ${open && " mr-2"}`}/>
 <input type={"search"} placeholder='search' className={`text-base w-full  text-black focus:outline-none bg-transparent   ${!open && "hidden"}`} />
 </div>
<ul className='pt-2'>
{Menus.map((menu, index)=>(
<>
  <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md  ${menu.spacing ? "mt-9" : "mt-2"}`}>
  <span className='text-2xl block float-left'>{menu.icon ? menu.icon : <MdDashboard />}</span>
    <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
    {menu.submenu && open && (
      <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={()=>setSubmenuOpen(!submenuOpen)}/>

    )}
  </li>
  {menu.submenu && submenuOpen && open &&(
    <ul>
      {menu.submenuItems.map((submenuItems, index)=>(
        <li key={index} className="text-white text-sm flex items-center gap-x-4 cursor-pointer px-5 p-2 hover:bg-light-white rounded-md">
          {submenuItems.title}
        </li>
      ))}
    </ul>
  )}
</>
))}

</ul>
    </div>
 <div className='p-7'>
  <h1 className='text-2xl font-semibold'>Home Page</h1>
 </div>
    </div>
 

 
   
  )
}

export default Sidebar