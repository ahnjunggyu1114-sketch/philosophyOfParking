import { NavLink } from 'react-router-dom'

import AI from '../../assets/AI.svg'
import car from '../../assets/car.svg'
import community from '../../assets/community.svg'
import home from '../../assets/home.svg'
import user from '../../assets/user.svg'
import AIAct from '../../assets/AIAct.svg'
import carAct from '../../assets/carAct.svg'
import communityAct from '../../assets/communityAct.svg'
import homeAct from '../../assets/homeAct.svg'
import userAct from '../../assets/userAct.svg'


const navItems = [
  { label: '내 차', defaultIcon: car, activeIcon: carAct, path: '/MyCar' },
  { label: 'AI 도우미', defaultIcon: AI, activeIcon: AIAct, path: '/AiHelper' },
  { label: '홈', defaultIcon: home, activeIcon: homeAct, path: '/' },
  { label: '커뮤니티', defaultIcon: community, activeIcon: communityAct, path: '/Community' },
  { label: '내 정보', defaultIcon: user, activeIcon: userAct, path: '/MyInfo' },
]

const BottomNavbar = () => {
  return (
    <nav className="bg-[#F6F8FC] fixed bottom-0 left-0 right-0 pt-[15px] w-full ">
      <div className="flex gap-[58px] h-[66px] items-center justify-between px-[28px] pt-[15px] pb-[44px] ">
        {navItems.map((item) => (
          <NavLink key={item.label} to={item.path}>
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center gap-[4px] text-[9px] font-semibold ${
                  isActive ? 'text-[#3B82F6]' : 'text-[#C8CBD2]'
                }`}
              >
                <img
                  className="h-[24px] w-[24px]"
                  src={isActive ? item.activeIcon : item.defaultIcon}
                  alt={item.label}
                />
                <span>{item.label}</span>
              </div>
            )}
          </NavLink>

        ))}
      </div>
    </nav>
  )
}

export default BottomNavbar