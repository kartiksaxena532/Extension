import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo,FaCommentDots ,FaStickyNote } from 'react-icons/fa';
import { CalendarRange } from 'lucide-react';
import Pomo from '/images/gpt.png';
import "../../popup.css"

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-[#22333B] shadow-lg">
                    
                    <a href='#'>
        <SideBarIcon icon={<FaFire size="28" />} text="Digi-Board"/>
        </a>
        <Divider />
        <a href='https://calendar.google.com/calendar/u/0/r?pli=1' target='_blank'>
        <SideBarIcon icon={<CalendarRange size="32" />} text="Calender"  />
        </a>
        <a href="https://keep.google.com" target='_blank'>
        <SideBarIcon icon={<FaStickyNote  size="20" />} text="Notes" />
        </a>
        <a href="https://chatgpt.com/" target="_blank">
        <SideBarIcon icon={<img width="40" height="40" src={Pomo} alt="chatgpt"/>} text="chat-gpt" />
        </a>
        <Divider />
        <a href="https://chromewebstore.google.com/category/extensions?utm_source=ext_sidebar&hl=en-US" target="_blank">
        <SideBarIcon icon={<BsGearFill size="22" />} text="Settings" />
        </a>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;