import { BsCart3 , BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'animate.css';


const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  
    useEffect (() => {
        AOS.init({ once: true });
      }, []);
  
    return (


      
    <aside id="sidebar" className={` ${openSidebarToggle ? "sidebar-responsive": ""} animate__animated animate__fadeInLeft`} 
   

    >
       <div className='sidebar-title'>
        <div className="sidebar-brand">
            <BsCart3 className="icon_header"/> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
       </div>

       <ul className="sidebar-list"  data-aos="fade-right">
        <li className="sidebar-list-item">
            <a href="">
                <BsGrid1X2Fill className="icon"/>Dashboard
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsFillArchiveFill className="icon"/>Products
            </a>
        </li><li className="sidebar-list-item">
            <a href="">
                <BsFillGrid3X3GapFill className="icon"/>Categories
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsPeopleFill className="icon"/>Customers
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsListCheck className="icon"/>Inventory
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsMenuButtonWideFill className="icon"/>Reports
            </a>
        </li>
        <li className="sidebar-list-item">
            <a href="">
                <BsFillGearFill className="icon"/>Setting
            </a>
        </li>

       </ul>
    </aside>
  )
}

export default Sidebar