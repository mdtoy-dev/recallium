const NavbarIcon = ({ icon, text }) => {
  return (
    <div className="navbar-icon group">{icon}
    <span className="navbar-hover group-hover:scale-100">{text}</span>
    </div>
  )
}
export default NavbarIcon