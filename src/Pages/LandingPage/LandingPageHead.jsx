import Button from "../../Components/Button/Button"


function LandingPageHead() {
  return (
    <>
      <header className="flex justify-center w-full h-[88px] bg-[#141416]">
        <div className="container flex items-center justify-between h-[88px] ">
          <div className="flex font-second font-bold text-[30px] text-[--general---white] leading-[80%]">
            N.SELLER
          </div>
          <nav>
            <ul className="grid grid-flow-col gap-[60px] font-family text-[14px] leading-[171%] font-[600] text-[#858586]">
              <a href="/">Про нас</a>
              <a href="/">Маркетплейс</a>
              <a href="/">Преемущества</a>
              <a href="/">Тарифы</a>
            </ul>
          </nav>
          <Button className="!py-[16px] !w-[112px] !h-[56px] !bg-[#1b1b1e] !text-[14px] !leading-[171%] !text-[--general---white]" text="Войти" to={'/loginsel'} />
          {/* как сделать стили кнопки, чтобы они перезаписывали дефолтные и не через !  */}
        </div>
      </header>
    </>
  )
}

export default LandingPageHead