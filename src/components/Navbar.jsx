import { FaHome, FaUser } from "react-icons/fa"
import { GiBrain, GiProgression } from "react-icons/gi"
import { MdArticle, MdOutlineOndemandVideo } from "react-icons/md"
import { IoIosSettings } from "react-icons/io"
import NavbarIcon from "./NavbarIcon"
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-16 flex flex-col justify-between h-full shadow-lg">
      <div>
        <NavLink to='/'>
        <NavbarIcon icon={<FaHome size="28" />} text="Home" />
        </NavLink>
        <NavLink to='/practice'>
        <NavbarIcon icon={<GiBrain size="28" />} text="Practice" />
        </NavLink>
        <NavLink to='/articles'>
        <NavbarIcon icon={<MdArticle size="28" />} text="Articles" />
        </NavLink>
        <NavLink to='/videos'>
        <NavbarIcon
          icon={<MdOutlineOndemandVideo size="28" />}
          text="Videos"
        />
        </NavLink>
        <NavLink to='/progress'>
        <NavbarIcon icon={<GiProgression size="28" />} text="Progress" />
        </NavLink>
      </div>
      <div>
        <NavbarIcon icon={<IoIosSettings size="28" />} text="Settings" />
        <NavbarIcon icon={<FaUser size="28" />} text="Profile" />
      </div>
    </div>
  )
}
export default Navbar
