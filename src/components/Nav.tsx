import '@/main.css'
import { useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { NavLink } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'
import {
  Baby,
  CircleParking,
  LucideApple,
  LucideBriefcaseMedical, LucideCircleHelp,
  LucideDumbbell,
  LucideHome,
  LucideHospital, LucideListCollapse, LucideNavigation, Navigation2Icon
} from 'lucide-react'
import { NavigationContext } from 'react-day-picker'
function Nav() {
  const [showNav, setShowNav] = useState(false);

  const links = [
    {url: "/", name: "Home", icon: <LucideHome />},
    {url: "/pregnancy", name: "Pregnancy", icon: <CircleParking />},
    {url: "/baby", name: "Baby", icon: <Baby />},
    {url: "/birthprep", name: "Birth Prep", icon: <LucideHospital />},
    {url: "/medicine", name: "Medicine", icon: <LucideBriefcaseMedical />},
    {url: "/nutrition", name: "Nutrition", icon: <LucideApple />},
    {url: "/exercise", name: "Exercise", icon: <LucideDumbbell />},
    {url: "/help", name: "Help", icon: <LucideCircleHelp />},
  ]

  const toggleNav = () => {
    setShowNav(!showNav);
  }

  return (
    <>
      <Button onClick={toggleNav} className={`nav-btn`}>Navigation<LucideListCollapse /></Button>
      <div className={`${showNav ? "nav" : "nav-hide"}`} onClick={toggleNav}>
        {links.map(link => {
          return (
            <NavLink onClick={toggleNav} to={link.url}>
              <div className={`${showNav ? "nav-link" : "nav-hide"}`}>
              <Avatar className={`avatar`}>
              <AvatarImage src={link.icon} />
              <AvatarFallback className={`avatar-fb`}>{link.icon}</AvatarFallback>
              </Avatar>
                {link.name}
              </div>
            </NavLink>
          )
        })}
      </div>

    </>
  )
}

export default Nav