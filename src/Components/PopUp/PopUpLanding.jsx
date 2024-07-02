import Button from "../Button/Button"
import LandingForm from "../Form/LandingForm"

export default function PopUpLanding() {
  return (
    <>
      <div style={{ background: 'rgba(20, 20, 22, 0.1)', backdropFilter: 'blur(30px)', }} className="h-[100vh] w-[100%] fixed z-10">
        <div className="w-[598px] h-[679px] bg-[#1b1b1e] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-[10px] p-[27px] flex flex-col items-center ">
          <div className="w-[100%] flex justify-end">
            <button className="relative w-[24px] h-[24px] flex items-center justify-center ">
              <div className="w-[2px] h-[24px] bg-[var(--general---white)] rotate-[135deg] absolute "></div>
              <div className="w-[2px] h-[24px] bg-[var(--general---white)] rotate-[45deg] absolute "></div>
            </button>
          </div>
          <div className="mt-[19px] flex flex-col items-center justify-center">
            <h2 className=" font-[200] text-[40px] leading-[150%] text-center text-[var(--general---white)] ">Мы свяжемся с вами в ближайшее время</h2>
            <p className="mt-[20px] font-[200] text-[16px] leading-[150%]  text-center text-[#858586] w-[332px] ">Впишите свои данные и мы перезвоним вам для создания личного тарифного плана</p>
          </div>
          <LandingForm className={'mt-[60px]'} />
        </div>
      </div >
    </>
  )
}