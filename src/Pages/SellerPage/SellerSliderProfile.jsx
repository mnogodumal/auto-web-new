import { useState } from "react";
import { NavLink } from "react-router-dom";




export default function SellerSliderProfile() {
  const [header, setHeader] = useState('')

  function changeHeader() {

  }

  return (
    <>
      <section className="container">
        <div>
          <p className="mt-[39px] font-[500] text-[45px] leading-[150%] text-[var(--text---main)]">Мои объявления</p>
        </div>
        <div className="mt-[60px] flex gap-[60px]">
          <NavLink className="font-[500] text-[14px] leading-[171%] text-[var(--text---main)]" to={'/sellerads'}>
            {({ isActive }) => (
              <>
                <div>
                  <span id="ads">Мои объявления</span>
                </div>
                <div className={`w-full h-[3px] ${isActive ? 'bg-[var(--accent---main-green)]' : ''}`}>
                </div>
              </>
            )}
          </NavLink>
          <NavLink className="font-[500] text-[14px] leading-[171%] text-[var(--text---main)]" to={'/sellersms'}>
            {({ isActive }) => (
              <>
                <div>
                  <span>Сообщения</span>
                </div>
                <div className={`w-full h-[3px] ${isActive ? 'bg-[var(--accent---main-green)]' : ''}`}>
                </div>
              </>
            )}
          </NavLink>
          <NavLink className="font-[500] text-[14px] leading-[171%] text-[var(--text---main)]" to={'/sellersubscribe'}>
            {({ isActive }) => (
              <>
                <div>
                  <span>Управление подпиской</span>
                </div>
                <div className={`w-full h-[3px] ${isActive ? 'bg-[var(--accent---main-green)]' : ''}`}>
                </div>
              </>
            )}
          </NavLink>
          <NavLink className="font-[500] text-[14px] leading-[171%] text-[var(--text---main)]" to={'/sellersettings'}>
            {({ isActive }) => (
              <>
                <div>
                  <span>Настройки профиля</span>
                </div>
                <div className={`w-full h-[3px] ${isActive ? 'bg-[var(--accent---main-green)]' : ''}`}>
                </div>
              </>
            )}
          </NavLink>
        </div>
      </section>
    </>
  )
}