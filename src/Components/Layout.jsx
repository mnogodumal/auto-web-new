import { Link, Outlet, NavLink } from "react-router-dom"
import Button from "./Button/Button"

export default function Layout() {
  return (
    <>
      <header className="flex justify-center w-full h-[88px] bg-[#141416]">
        <div className="flex items-center justify-around w-[1220px] h-[88px]">
          <div className="flex font-[--second-family] font-bold text-[30px] text-[--general---white] leading-[80%]">
            N.SELLER
          </div>
          <nav>
            <ul className="grid grid-flow-col gap-[60px] font-[--font-family] text-[14px] leading-[171%] font-[600] text-[#858586]">
              <NavLink to="/Mark">Маркетплейс</NavLink>
              <NavLink to="/About">Про нас</NavLink>
              <NavLink to="/Plus">Преемущества</NavLink>
              {/* <a href="/">Тарифы</a> */}
            </ul>
          </nav>
          <Button className={'rounded-[8px] py-[16px] w-[112px] h-[56px] bg-[#1b1b1e] font-[--font-family] font-[700] font-[14px] leading-[171%] uppercase text-[--general---white]'} text={'Войти'} />
        </div>
      </header>

      <Outlet />
    </>
  )
}